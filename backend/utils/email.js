const nodemailer = require('nodemailer');

const recipientPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmailInput(recipient, subject, body) {
    if (!recipientPattern.test(recipient) || /[\r\n]/.test(recipient)) {
        throw new TypeError('Invalid email recipient');
    }
    if (typeof subject !== 'string' || subject.length === 0 || subject.length > 200 || /[\r\n]/.test(subject)) {
        throw new TypeError('Invalid email subject');
    }
    if (typeof body !== 'string' || body.length > 100_000) {
        throw new TypeError('Invalid email body');
    }
}

function createEmailSender({ transporter, from }) {
    return async function sendEmail(recipient, subject, body) {
        validateEmailInput(recipient, subject, body);
        await transporter.sendMail({ from, to: recipient, subject, text: body });
    };
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
});

const sendEmail = createEmailSender({ transporter, from: process.env.EMAIL });

module.exports = { sendEmail, createEmailSender, validateEmailInput };
