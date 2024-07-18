// paymentRoutes.js
const express = require('express');
const { createStripePayment, createPayPalPayment } = require('../controllers/paymentController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/stripe', authenticateToken, createStripePayment);
router.post('/paypal', authenticateToken, createPayPalPayment);

module.exports = router;
