const { execFileSync } = require("node:child_process");
const { existsSync } = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
if (!existsSync(path.join(root, ".git"))) {
  process.exit(0);
}

execFileSync(
  "git",
  ["-C", root, "config", "--local", "core.hooksPath", ".githooks"],
  {
    stdio: "inherit",
  },
);
console.log("Configured repository hooks at .githooks");
