const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, jwtSecretKey, async (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    try {
      const user = await User.findOne({ username: decoded.username });
      if (!user) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

module.exports = authenticateToken;
