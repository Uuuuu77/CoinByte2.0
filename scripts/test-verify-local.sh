#!/usr/bin/env bash
set -eu
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REAL_NODE="$(command -v node)"
export REAL_NODE
TEMP="$(mktemp -d)"
trap 'rm -f "$TEMP/scripts/verify-local.sh" "$TEMP/scripts/test-verify-local.sh" "$TEMP/scripts/test-node-pin.js" "$TEMP/.nvmrc" "$TEMP/package.json" "$TEMP/backend/package.json" "$TEMP/frontend/package.json" "$TEMP/.github/workflows/ci.yml" "$TEMP/output.log" "$TEMP/bin/node" "$TEMP/bin/npm" "$TEMP/bin/gitleaks"; rmdir "$TEMP/scripts" "$TEMP/backend" "$TEMP/frontend" "$TEMP/bin" "$TEMP/.github/workflows" "$TEMP/.github" "$TEMP"' EXIT
mkdir -p "$TEMP/scripts" "$TEMP/backend" "$TEMP/frontend" "$TEMP/bin" "$TEMP/.github/workflows"
cp "$ROOT/scripts/verify-local.sh" "$TEMP/scripts/verify-local.sh"
cp "$ROOT/scripts/test-verify-local.sh" "$TEMP/scripts/test-verify-local.sh"
cp "$ROOT/scripts/test-node-pin.js" "$TEMP/scripts/test-node-pin.js"
cp "$ROOT/.nvmrc" "$TEMP/.nvmrc"
cp "$ROOT/package.json" "$TEMP/package.json"
cp "$ROOT/backend/package.json" "$TEMP/backend/package.json"
cp "$ROOT/frontend/package.json" "$TEMP/frontend/package.json"
cp "$ROOT/.github/workflows/ci.yml" "$TEMP/.github/workflows/ci.yml"
cat > "$TEMP/bin/node" <<'SH'
#!/usr/bin/env sh
if [ "${1:-}" = "-v" ]; then
  printf 'v26.0.0\n'
  exit 0
fi
exec "$REAL_NODE" "$@"
SH
cat > "$TEMP/bin/npm" <<'SH'
#!/usr/bin/env sh
printf 'Injected npm failure for gate regression test\n' >&2
exit 73
SH
cat > "$TEMP/bin/gitleaks" <<'SH'
#!/usr/bin/env sh
exit 0
SH
chmod +x "$TEMP/bin/node" "$TEMP/bin/npm" "$TEMP/bin/gitleaks"
OUTPUT="$TEMP/output.log"
if VERIFY_LOCAL_TESTING=1 PATH="$TEMP/bin:$PATH" bash "$TEMP/scripts/verify-local.sh" >"$OUTPUT" 2>&1; then
  printf 'FAIL gate regression test: injected step failure was accepted\n' >&2
  cat "$OUTPUT" >&2
  exit 1
fi
if ! grep -Fq 'FAIL root tooling install (npm ci) (exit 73)' "$OUTPUT"; then
  printf 'FAIL gate regression test: expected failure was not reported\n' >&2
  cat "$OUTPUT" >&2
  exit 1
fi
printf 'PASS gate regression test: an injected failing step exits non-zero\n'
