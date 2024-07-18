// messageRoutes.js
const express = require('express');
const { getMessages, createMessage } = require('../controllers/messageController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getMessages);
router.post('/', authenticateToken, createMessage);

module.exports = router;
