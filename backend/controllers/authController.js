// authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendEmail } = require('../utils/email');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Utility function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, jwtSecretKey, { expiresIn: '1h' });
};

// Middleware to authenticate the user using JWT
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// User registration
const register = async (req, res) => {
  try {
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

    sendEmail(email, 'New User Registration', `Welcome to CoinByte, ${username}! Your account has been registered successfully.`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    sendEmail(user.email, 'New Login Notification', `Hello ${username},\n\nYou have successfully logged in to your CoinByte account.`);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// User logout
const logout = (req, res) => {
  // To logout, client-side should simply delete the JWT token from storage (e.g., localStorage or cookies).
  res.json({ message: 'Logout successful' });
};

// Get user details
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  register,
  login,
  logout,
  getUser,
  authenticate,  // Exporting authenticate middleware
};
