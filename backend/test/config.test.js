const assert = require('node:assert/strict');
const test = require('node:test');
const { loadConfig } = require('../config/env');

test('rejects missing database and weak JWT configuration', () => {
  assert.throws(() => loadConfig({}), /MONGO_URI, JWT_SECRET_KEY/);
  assert.throws(
    () => loadConfig({ MONGO_URI: 'mongodb://localhost/db', JWT_SECRET_KEY: 'short' }),
    /JWT_SECRET_KEY/
  );
});

test('loads validated configuration without exposing secrets', () => {
  const config = loadConfig({
    MONGO_URI: 'mongodb://localhost/db',
    JWT_SECRET_KEY: 'a'.repeat(32),
    PORT: '5100',
    CORS_ORIGINS: 'http://localhost:5173, https://example.test',
  });
  assert.deepEqual(config.corsOrigins, ['http://localhost:5173', 'https://example.test']);
  assert.equal(config.port, 5100);
  assert.equal(config.jwtSecret, 'a'.repeat(32));
});
