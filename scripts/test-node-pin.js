const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const pinned = fs.readFileSync(path.join(root, ".nvmrc"), "utf8").trim();
if (!/^\d+$/.test(pinned)) {
  throw new Error(
    `Expected .nvmrc to contain a major version, received ${pinned}`,
  );
}

const expectedEngine = `${pinned}.x`;
for (const manifestPath of [
  "package.json",
  "backend/package.json",
  "frontend/package.json",
]) {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(root, manifestPath), "utf8"),
  );
  if (manifest.engines?.node !== expectedEngine) {
    throw new Error(
      `${manifestPath} must declare engines.node as ${expectedEngine}`,
    );
  }
}

if (fs.existsSync(path.join(root, "frontend/.nvmrc"))) {
  throw new Error("Use only the repository-root .nvmrc pin");
}

const workflow = fs.readFileSync(
  path.join(root, ".github/workflows/ci.yml"),
  "utf8",
);
if (!workflow.includes("node-version-file: .nvmrc")) {
  throw new Error("CI must read its Node version from the root .nvmrc");
}

console.log(`PASS Node pin matches .nvmrc major ${pinned}`);
