// paymentRoutes.js
const express = require('express');
const { createStripePayment, createPayPalPayment } = require('../controllers/paymentController');
const authenticateToken = require('../middleware/authMiddleware');
const { validatePayment } = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/stripe', authenticateToken, validatePayment, createStripePayment);
router.post('/paypal', authenticateToken, validatePayment, createPayPalPayment);

module.exports = router;
