# Contributing

Work on a feature branch, never directly on `master`. Use imperative commit subjects and keep tests and security regressions in the same commit as the fix.

Install the root tooling and both application packages to configure this clone's hooks:

```sh
npm ci
(cd backend && npm ci)
(cd frontend && npm ci)
```

Before every push, run `scripts/verify-local.sh` from the repository root. The pre-push hook runs this same gate. It checks the Node version against `.nvmrc`, uses `npm ci`, runs lint/typecheck/tests/build when defined, audits both packages at high severity, and scans the working tree with gitleaks. Do not bypass the hook. `scripts/test-verify-local.sh` is the deterministic regression test for a failing gate step.

GitHub Actions is parked on manual `workflow_dispatch` because Actions runners are unavailable. Vercel Preview remains the deployment check. To restore automatic Actions checks, restore `pull_request` and intended push triggers in `.github/workflows/ci.yml` after runner access is available; do not remove or weaken the local gate.

Never commit `.env` files, credentials, keys, wallets, or build output.
