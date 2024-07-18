// activityLogRoutes.js
const express = require('express');
const { getActivityLogs, createActivityLog } = require('../controllers/activityLogController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getActivityLogs);
router.post('/', authenticateToken, createActivityLog);

module.exports = router; 
