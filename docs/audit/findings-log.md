# Findings Log

| Finding | Before | After | Evidence |
| --- | --- | --- | --- |
| Native bcrypt dependency chain | `bcrypt` pulled `@mapbox/node-pre-gyp` and vulnerable `tar` | `bcryptjs` is used by both auth paths | Commit `3935127`, password compatibility test |
| Nodemailer advisory | `nodemailer` below patched major | `nodemailer@10.5.0` | Commit `2c5c6d4`, mocked transport and injection tests |
| Vite advisory | Vite 5 dependency | Vite 8.3.7 and current React plugin | Commit `d695051`, frontend build |
| Startup configuration | Secrets and DB configuration were not centrally validated | Required Mongo and JWT configuration fail closed | `backend/test/config.test.js` |
| Deploy evidence | CI runner locked by billing; backend host unknown | Block documented, no audit gate weakening | `docs/audit/03-deploy-block.md` |
