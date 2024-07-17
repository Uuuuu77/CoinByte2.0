const express = require('express');
const router = express.Router();

// Import your subscribe controller
const { subscribe } = require('../controllers/subscribeController');

// Define the subscribe route
router.post('/subscribe', subscribe);

module.exports = router;
