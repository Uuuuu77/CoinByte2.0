# Contributing

Work on a feature branch, never directly on `master`. Use imperative commit subjects and keep tests and security regressions in the same commit as the fix.

Run from each app directory:

```sh
npm ci
npm test
npm run lint
npm audit --audit-level=high
```

Run `npm run build` from `frontend/`. Never commit `.env` files, credentials, keys, wallets, build output, or bypass verification hooks.
