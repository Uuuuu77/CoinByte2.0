const { execFileSync } = require("node:child_process");
const {
  copyFileSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
} = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const scanRoot = mkdtempSync(path.join(os.tmpdir(), "coinbyte-working-tree-"));

try {
  const paths = execFileSync("git", [
    "-C",
    root,
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
    "-z",
  ])
    .toString()
    .split("\0")
    .filter(Boolean);

  for (const relativePath of paths) {
    const source = path.resolve(root, relativePath);
    if (!source.startsWith(`${root}${path.sep}`))
      throw new Error("Invalid repository path");
    try {
      if (!lstatSync(source).isFile()) continue;
    } catch (error) {
      if (error.code === "ENOENT") continue;
      throw error;
    }
    const destination = path.resolve(scanRoot, relativePath);
    if (!destination.startsWith(`${scanRoot}${path.sep}`))
      throw new Error("Invalid repository path");
    mkdirSync(path.dirname(destination), { recursive: true });
    copyFileSync(source, destination);
  }

  execFileSync(
    "gitleaks",
    ["dir", "--redact", "--exit-code", "1", "--no-banner", scanRoot],
    {
      stdio: "inherit",
    },
  );
} finally {
  rmSync(scanRoot, { recursive: true, force: true });
}
