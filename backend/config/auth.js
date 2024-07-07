const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('./models');
const { sendEmail } = require('./utils');
const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Utility to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });
};

// User registration route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, user_type } = req.body;

    if (await User.findOne({ username }) || await User.findOne({ email })) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, user_type });
    await newUser.save();

    sendEmail({
      subject: 'New User Registration',
      recipient: email,
      body: `Welcome to CoinByte, ${username}! Your account has been registered successfully.`,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
      const token = generateToken(user);

      sendEmail({
        subject: 'New Login Notification',
        recipient: user.email,
        body: `Hello ${username},\n\nYou have successfully logged in to your CoinByte account.`,
      });

      res.json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Google OAuth login route
router.get('/google', async (req, res) => {
  const redirectUri = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
  });

  res.redirect(redirectUri);
});

// Google OAuth callback route
router.get('/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, sub: googleId } = ticket.getPayload();

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ username: name, email, googleId, user_type: 'individual' });
      await user.save();
    }

    const token = generateToken(user);

    sendEmail({
      subject: 'New Login Notification',
      recipient: email,
      body: `Hello ${name},\n\nYou have successfully logged in to your CoinByte account via Google.`,
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Google login failed' });
  }
});

module.exports = router;
