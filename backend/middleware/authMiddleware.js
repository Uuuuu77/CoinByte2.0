// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  jwt.verify(token, jwtSecretKey, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    try {
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
};

module.exports = authenticateToken;
