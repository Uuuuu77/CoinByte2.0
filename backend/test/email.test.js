const assert = require('node:assert/strict');
const test = require('node:test');
const { createEmailSender } = require('../utils/email');

test('email sender passes validated input to the mocked transport', async () => {
  const sent = [];
  const sendEmail = createEmailSender({
    from: 'noreply@example.test',
    transporter: { sendMail: async (mail) => sent.push(mail) },
  });
  await sendEmail('user@example.test', 'Welcome', 'Hello');
  assert.deepEqual(sent, [{ from: 'noreply@example.test', to: 'user@example.test', subject: 'Welcome', text: 'Hello' }]);
});

test('email sender rejects recipient and header injection', async () => {
  const sendEmail = createEmailSender({ from: 'noreply@example.test', transporter: { sendMail: async () => {} } });
  await assert.rejects(() => sendEmail('user@example.test\r\nBcc: attacker@example.test', 'Welcome', 'Hello'), /Invalid email recipient/);
  await assert.rejects(() => sendEmail('user@example.test', 'Welcome\r\nBcc: attacker@example.test', 'Hello'), /Invalid email subject/);
});
