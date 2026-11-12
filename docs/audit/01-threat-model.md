# CoinByte 2.0 Threat Model

Status: initial model from the pre-hardening prototype. Findings are ranked by impact and likelihood. File locations are approximate source locations and will be revalidated as fixes land.

## Trust boundaries

| Boundary | Attacker control | Potential gain | Current control |
| --- | --- | --- | --- |
| HTTP request to Express routes | Headers, URL, JSON body, method, size, timing | Account access, data tampering, unauthorized value movement | Partial JWT middleware; inconsistent validation |
| JWT bearer token | Token presented by client, token contents if signing secret is exposed | Impersonation and access to user data | `jsonwebtoken` verification and user lookup; secret/config handling inconsistent |
| Authenticated wallet actions | Amounts, recipient IDs, currency fields, retry timing | Direct balance theft or inflation | Positive-number checks only; non-atomic writes; no idempotency |
| Payment provider boundary | Amount, currency, retry behavior, provider response | Overcharge, undercharge, duplicate payment, leaked provider data | Auth middleware; provider SDKs; no server-side policy/idempotency |
| MongoDB boundary | Values written through controllers and model construction | Stored injection/data corruption, cross-user access | Mongoose models; several controllers accept broad request bodies |
| Frontend storage/API boundary | Browser token storage and API inputs | Token theft, CSRF-like abuse, request tampering | Bearer token in `localStorage`; client checks are not authorization |
| External CoinGecko/SMTP services | Remote response availability and content | Availability degradation, misleading display data, email abuse | Axios/Nodemailer calls with limited validation and failure handling |
| Runtime configuration | Environment values and deployment configuration | Secret disclosure or startup with unsafe defaults | `dotenv`; no centralized fail-fast config validation |

## Ranked findings

### Critical C-01: Non-atomic wallet value movement

- **Location:** `backend/controllers/walletController.js:deposit`, `withdraw`, `transfer`
- **Exploit:** Concurrent withdrawals or transfers can both pass the balance check, while separate transaction and wallet writes leave balances and transaction history inconsistent.
- **Fix:** Use integer minor units, MongoDB transactions or an atomic conditional update, and idempotency keys for every value-changing request.
- **Proof test:** Concurrent transfer/withdrawal integration test asserts total debits never exceed the starting balance and retries do not create duplicate effects.

### Critical C-02: Client-controlled payment amounts without policy validation

- **Location:** `backend/controllers/paymentController.js:12-58`
- **Exploit:** An authenticated caller can submit arbitrary amounts, currencies, and repeated requests to create unintended provider charges.
- **Fix:** Validate a strict payment schema, allowlist currencies, derive totals from server-side records, cap amounts, and require an idempotency key passed to the provider.
- **Proof test:** Negative tests reject malformed, fractional where disallowed, out-of-range, unsupported-currency, and duplicate payment requests.

### Critical C-03: JWT secret contract is inconsistent and not fail-closed

- **Location:** `backend/middleware/authMiddleware.js:8`, `backend/controllers/authController.js:10`, `backend/config/auth.js:15,70`
- **Exploit:** Different code paths use `JWT_SECRET_KEY` and `JWT_SECRET`; an unset secret can cause runtime failures or inconsistent authentication behavior.
- **Fix:** Centralize validated configuration, use one secret variable, reject startup when it is missing or too weak, and remove duplicate auth implementation.
- **Proof test:** Configuration tests fail startup with missing/short secrets and authenticate tokens consistently across every protected route.

### High H-01: Broad request bodies are persisted

- **Location:** `backend/controllers/userController.js:31`, `notificationController.js:32`, `newsController.js:32`, `messageController.js:32`, `activityLogController.js:32`
- **Exploit:** A caller can write fields outside the intended API contract, including ownership or moderation fields.
- **Fix:** Validate and pick an explicit allowlist at each boundary; derive user/owner fields from the authenticated principal.
- **Proof test:** Unknown fields and forged ownership fields are rejected or ignored and stored documents retain server-derived ownership.

### High H-02: Authorization coverage is incomplete or unclear

- **Location:** `backend/routes/index.js` and route modules
- **Exploit:** Any route mounted without authentication or object-level ownership checks may expose another user's records or permit unauthorized mutations.
- **Fix:** Inventory every route, apply authentication and resource ownership checks, and make public routes explicit.
- **Proof test:** Route matrix integration tests exercise unauthenticated, wrong-user, and authorized cases.

### High H-03: Bearer token stored in browser localStorage

- **Location:** `frontend/src/services/auth.js:10,18,23`
- **Exploit:** Any XSS can read the token and reuse it outside the browser.
- **Fix:** Prefer secure, HttpOnly, SameSite cookies with CSRF protection; if migration is not possible in this prototype, document the limitation and harden XSS/input handling.
- **Proof test:** Auth integration test verifies cookie flags and CSRF rejection for state-changing requests.

### Medium M-01: Floating-point arithmetic for balances

- **Location:** `backend/controllers/walletController.js:26-62`, wallet/transaction models
- **Exploit:** Repeated decimal operations create rounding drift and can produce incorrect balances.
- **Fix:** Store integer minor units or Decimal128 and perform explicit decimal validation.
- **Proof test:** Deterministic money-unit tests cover decimal edge cases and conservation of value.

### Medium M-02: Error responses and logs expose provider details

- **Location:** `backend/controllers/paymentController.js:22,51`, multiple controllers
- **Exploit:** Provider error messages or stack-adjacent data reveal implementation details or identifiers.
- **Fix:** Log structured, redacted internal errors and return stable public error codes.
- **Proof test:** Error-path tests assert responses contain no stack, secret, token, or provider credential material.

### Medium M-03: No global request limits or security headers are evident

- **Location:** `backend/server.js`
- **Exploit:** Oversized or repeated requests can consume resources; browser protections are absent.
- **Fix:** Add body-size limits, rate limiting appropriate to route classes, CORS allowlist, and baseline security headers.
- **Proof test:** Middleware tests reject oversized bodies and assert required headers and origin behavior.

### Low L-01: External market data affects displayed value without freshness policy

- **Location:** `backend/utils/api.js`, `walletController.js:13-15`
- **Exploit:** Stale or unavailable market data misleads users about displayed fiat value.
- **Fix:** Add timeout, schema validation, freshness metadata, and fail-closed display behavior.
- **Proof test:** Fixture tests cover malformed, stale, and timeout provider responses.

## Deferred architecture questions

1. The repository is a prototype and payment/wallet routes appear to be illustrative. Until confirmed otherwise, hardening treats them as real value movement.
2. The README references a different JWT variable than the code. The hardened contract will use one variable unless deployment compatibility requires a documented migration.
3. The successor repository is not identified, so this pass will document the prototype as superseded only if a repository name is supplied.
