const assert = require('node:assert/strict');
const test = require('node:test');
const bcrypt = require('bcryptjs');

test('bcryptjs verifies an existing bcrypt-compatible password hash', async () => {
  const hash = '$2a$10$7Oa8ejNGxHnoMbgdlj7PKeqEjtWdL0YtALcYb2F6ZnD.3JAbMfLIG';
  assert.equal(await bcrypt.compare('password', hash), true);
  assert.equal(await bcrypt.compare('wrong-password', hash), false);
});
