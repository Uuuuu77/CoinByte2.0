# Deploy Block

## Current root cause

GitHub Actions run `42787380095` did not start any job because the GitHub account is locked due to a billing issue. This is an infrastructure/account failure, not an install, build, audit, or boot failure. No runner logs exist for the skipped jobs.

Run URLs: https://github.com/Uuuuu77/CoinByte2.0/actions/runs/42787380095 and latest https://github.com/Uuuuu77/CoinByte2.0/actions/runs/42788934111

## Classification

- CI failure: infrastructure/account billing lock.
- Code classification: not determined because the jobs never started.
- Host deploy classification: not determined. The repository contains only `frontend/vercel.json`; no Railway, Render, Procfile, Dockerfile, or backend host deployment configuration was found.

## Dependency remediation status

- `bcrypt` -> `bcryptjs`: completed in commit `3935127`; removes the native `@mapbox/node-pre-gyp` and vulnerable `tar` chain. Password compatibility tests pass.
- `nodemailer`: upgraded to `10.5.0` in commit `2c5c6d4`; mocked transport and header-injection tests pass.
- `vite`: upgraded to `8.3.7` with the current React plugin in commit `d695051`; production build and high/critical audit gate pass locally.
- Backend audit after remediation: 0 high, 0 critical.
- Frontend audit after remediation: 0 high, 0 critical.

## Required next evidence

1. Unlock GitHub Actions billing, then rerun the workflow. Only after a runner starts can install, audit, test, lint, typecheck, and build failures be classified.
2. Provide the deployed host and its boot/deploy log, or configure the deployment target if the backend is not currently deployed. The backend exposes `GET /health`, but there is no repository-local host configuration proving where it runs.

## Do not weaken

Do not lower the audit severity threshold, add advisory ignores, remove startup validation, or loosen CORS to bypass this blocker.
