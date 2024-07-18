// notificationRoutes.js
const express = require('express');
const { getNotifications, createNotification } = require('../controllers/notificationController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getNotifications);
router.post('/', authenticateToken, createNotification);

module.exports = router;
