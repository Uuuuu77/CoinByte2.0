const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const { sendEmail } = require('../utils/sendEmail');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(googleClientId);

const register = async (req, res) => {
  const { username, email, password, userType } = req.body;

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    userType,
  });

  await newUser.save();

  // Send notification email
  sendEmail(email, 'New User Registration', `Welcome to CoinByte, ${username}! Your account has been registered successfully.`);

  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, jwtSecretKey, { expiresIn: '1h' });

  // Send notification email
  sendEmail(user.email, 'New Login Notification', `Hello ${username},\n\nYou have successfully logged in to your CoinByte account.`);

  res.json({ message: 'Login successful', token });
};

const googleLogin = (req, res) => {
  const redirectUri = `${req.protocol}://${req.get('host')}/auth/google_login/callback`;
  const url = googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
    redirect_uri: redirectUri,
  });

  res.redirect(url);
};

const googleCallback = async (req, res) => {
  const { code } = req.query;
  const redirectUri = `${req.protocol}://${req.get('host')}/auth/google_login/callback`;

  const { tokens } = await googleClient.getToken({
    code,
    redirect_uri: redirectUri,
  });

  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token,
    audience: googleClientId,
  });

  const payload = ticket.getPayload();
  const { sub: googleId, email, name } = payload;

  let user = await User.findOne({ email });
  if (!user) {
    user = new User({
      username: name,
      email,
      googleId,
      userType: 'individual',  // or determine based on your requirements
    });
    await user.save();
  }

  const token = jwt.sign({ username: user.username }, jwtSecretKey, { expiresIn: '1h' });

  // Send notification email
  sendEmail(user.email, 'New Login Notification', `Hello ${name},\n\nYou have successfully logged in to your CoinByte account via Google.`);

  res.json({ message: 'Login successful', token });
};

module.exports = {
  register,
  login,
  googleLogin,
  googleCallback,
};
