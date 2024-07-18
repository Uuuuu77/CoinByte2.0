// auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { sendEmail } = require('../utils');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Utility to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });
};

// User registration route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, user_type } = req.body;

    // Check if user already exists
    if (await User.findOne({ username }) || await User.findOne({ email })) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, user_type });
    await newUser.save();

    // Generate token and send response
    const token = generateToken(newUser);
    res.status(201).json({ message: 'User registered successfully', token, user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if the user exists and the password matches
    if (user && await bcrypt.compare(password, user.password)) {
      const token = generateToken(user);
      res.json({ message: 'Login successful', token, user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user route
router.get('/me', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    res.json({ user });
  } catch (error) {
    console.error('Error fetching current user:', error);
    res.status(500).json({ message: 'Failed to fetch current user' });
  }
});

module.exports = router;
