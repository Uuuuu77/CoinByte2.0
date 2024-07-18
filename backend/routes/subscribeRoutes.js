// subscribeRoutes.js
const express = require('express');
const { subscribe } = require('../controllers/subscribeController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, subscribe);

module.exports = router;
