# CI Root Cause Report

## Run

- Workflow: `CI`
- Run: https://github.com/Uuuuu77/CoinByte2.0/actions/runs/42789387151
- Commit: `6aed7b8`

## Failure table

| Job                 | Failing step    | First error line                                  | Exit code   | Evidence                                                    |
| ------------------- | --------------- | ------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| `checks (backend)`  | No step started | Not available: GitHub API returns `log not found` | Not exposed | Job started and failed in 2 seconds with `steps: []`        |
| `checks (frontend)` | No step started | Not available: GitHub API returns `log not found` | Not exposed | Job started and was cancelled in 2 seconds with `steps: []` |
| `secret-scan`       | No step started | Not available: GitHub API returns `log not found` | Not exposed | Job started and failed in 2 seconds with `steps: []`        |

## Classification

The available evidence supports an external runner or account configuration failure, not an application failure. Every job has an empty step list, no downloadable log, and completes within two seconds. The prior run also reported the GitHub account billing lock. No repository code or workflow gate was changed to hide this condition.

The deterministic local gate passed under Node `v26.13.1`, including clean `npm ci` installs, backend lint/typecheck/tests, frontend lint/build, npm audits, and a tracked plus nonignored working-tree gitleaks scan. It also checks Node pin consistency, gate failure behavior, and repository hygiene. The sandbox's default Node version was `v24.16.0`; local execution requires the pinned Node 26 runtime.

The backend audit initially found four moderate advisories through `googleapis@140.0.1`, `gaxios`, and `uuid`. Source search found no application call sites for `googleapis`, so the unused dependency was removed instead of accepting the risk or changing the audit threshold. The post-removal backend audit reports zero vulnerabilities at every severity.

The first gate run exposed 8,233 tracked files under `backend/node_modules`. `npm ci` replaced those generated files and dirtied the checkout. They were removed from version control while preserving the installed working copy, which is already covered by `.gitignore`. `scripts/test-repo-hygiene.sh` now asserts that root, backend, and frontend dependency directories remain ignored and untracked.

The root cause of the skipped/failed Actions status checks was an account-level Actions billing or runner block, not repository code. The workflow is parked on manual dispatch; local quality checks remain enforced by `scripts/verify-local.sh` and the pre-push hook.

## Required next evidence

A GitHub administrator must restore Actions billing or provide the runner error details. Once a runner executes at least one step, rerun the exact checks and record the first actionable application error here before making another code change.
