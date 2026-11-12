#!/usr/bin/env bash
set -eu
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

for dependency_path in node_modules backend/node_modules frontend/node_modules; do
  if [[ -n "$(git -C "$ROOT" ls-files -- "$dependency_path")" ]]; then
    printf 'FAIL generated dependency files are tracked: %s\n' "$dependency_path" >&2
    exit 1
  fi
  if ! git -C "$ROOT" check-ignore --quiet "$dependency_path/.package-lock.json"; then
    printf 'FAIL generated dependency directory is not ignored: %s\n' "$dependency_path" >&2
    exit 1
  fi
done

printf 'PASS generated dependency directories are ignored and untracked\n'
