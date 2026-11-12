#!/usr/bin/env bash
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PIN_FILE="$ROOT/.nvmrc"
export npm_config_loglevel=warn
export npm_config_timing=false

fail() {
  printf 'FAIL %s\n' "$1" >&2
  exit 1
}

[[ -f "$PIN_FILE" ]] || fail 'Node version pin (.nvmrc) is missing'
command -v node >/dev/null 2>&1 || fail 'Node.js is not installed'
command -v npm >/dev/null 2>&1 || fail 'npm is not installed'
command -v gitleaks >/dev/null 2>&1 || fail 'gitleaks is not installed (see README local gate setup)'

PINNED_NODE="$(tr -d '[:space:]' < "$PIN_FILE")"
ACTUAL_NODE="$(node -v)"
EXPECTED_MAJOR="${PINNED_NODE%%.*}"
ACTUAL_MAJOR="${ACTUAL_NODE#v}"
ACTUAL_MAJOR="${ACTUAL_MAJOR%%.*}"
if [[ -z "$PINNED_NODE" || "$ACTUAL_MAJOR" != "$EXPECTED_MAJOR" ]]; then
  printf 'FAIL Node version: expected major %s from .nvmrc, got %s\n' "$EXPECTED_MAJOR" "$ACTUAL_NODE" >&2
  exit 1
fi
printf 'PASS Node version: %s (pinned major %s)\n' "$ACTUAL_NODE" "$EXPECTED_MAJOR"

run_step() {
  local label="$1"
  shift
  if "$@"; then
    printf 'PASS %s\n' "$label"
  else
    local status=$?
    printf 'FAIL %s (exit %s)\n' "$label" "$status" >&2
    exit "$status"
  fi
}

has_script() {
  local package="$1" name="$2"
  node -e 'const p=require(require("node:path").resolve(process.argv[1])); process.exit(p.scripts?.[process.argv[2]] ? 0 : 1)' "$ROOT/$package/package.json" "$name"
}

run_optional_script() {
  local package="$1" script="$2"
  if has_script "$package" "$script"; then
    run_step "$package $script" npm --prefix "$ROOT/$package" run "$script"
  else
    printf 'SKIP %s %s (no script defined)\n' "$package" "$script"
  fi
}

run_step 'Node pin consistency' node "$ROOT/scripts/test-node-pin.js"
if [[ "${VERIFY_LOCAL_TESTING:-}" != "1" ]]; then
  run_step 'gate failure regression' bash "$ROOT/scripts/test-verify-local.sh"
fi
run_step 'root tooling install (npm ci)' npm --prefix "$ROOT" ci
run_step 'repository hygiene (generated dependencies)' bash "$ROOT/scripts/test-repo-hygiene.sh"

for package in backend frontend; do
  [[ -f "$ROOT/$package/package-lock.json" ]] || fail "$package package-lock.json is missing"
  run_step "$package install (npm ci)" npm --prefix "$ROOT/$package" ci
  run_optional_script "$package" lint
  run_optional_script "$package" typecheck
  run_optional_script "$package" test
  if has_script "$package" build; then
    run_step "$package build" npm --prefix "$ROOT/$package" run build
  else
    printf 'SKIP %s build (no script defined)\n' "$package"
  fi
  run_step "$package audit (high and critical)" npm --prefix "$ROOT/$package" audit --audit-level=high --json
done

run_step 'working-tree secret scan (gitleaks)' node "$ROOT/scripts/scan-working-tree.js"
