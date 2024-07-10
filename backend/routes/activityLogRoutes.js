// activityLogRoutes.js
const express = require('express');
const { getActivityLogs, createActivityLog } = require('../controllers/activityLogController');
const router = express.Router();

router.get('/', getActivityLogs);
router.post('/', createActivityLog);

module.exports = router;
