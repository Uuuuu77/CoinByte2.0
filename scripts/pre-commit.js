const { execFileSync, spawnSync } = require("node:child_process");
const { mkdtempSync, mkdirSync, rmSync, writeFileSync } = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const staged = execFileSync("git", [
  "-C",
  root,
  "diff",
  "--cached",
  "--diff-filter=ACMRTUXB",
  "--name-only",
  "-z",
])
  .toString()
  .split("\0")
  .filter(Boolean);
if (staged.length === 0) process.exit(0);

const prettierFiles = staged.filter((file) =>
  /\.(?:js|jsx|json|css|md|yml|yaml)$/.test(file),
);
for (const file of prettierFiles) {
  const prettier = path.join(root, "node_modules", ".bin", "prettier");
  if (!require("node:fs").existsSync(prettier)) {
    console.error(
      "Prettier is not installed; run npm ci at the repository root.",
    );
    process.exit(1);
  }
  execFileSync(prettier, ["--write", path.join(root, file)], {
    stdio: "inherit",
  });
  execFileSync("git", ["-C", root, "add", "--", file]);
}

for (const packageName of ["backend", "frontend"]) {
  const result = spawnSync("npm", ["run", "lint"], {
    cwd: path.join(root, packageName),
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

const temp = mkdtempSync(path.join(os.tmpdir(), "coinbyte-staged-secrets-"));
try {
  for (const file of staged) {
    const destination = path.resolve(temp, file);
    if (!destination.startsWith(`${temp}${path.sep}`))
      throw new Error("Invalid staged path");
    mkdirSync(path.dirname(destination), { recursive: true });
    const contents = execFileSync("git", ["-C", root, "show", `:${file}`]);
    writeFileSync(destination, contents);
  }
  execFileSync(
    "gitleaks",
    ["dir", "--redact", "--exit-code", "1", "--no-banner", temp],
    { stdio: "inherit" },
  );
} finally {
  rmSync(temp, { recursive: true, force: true });
}
