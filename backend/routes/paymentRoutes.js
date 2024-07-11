// paymentRoutes.js
const express = require('express');
const { createStripePayment, createPayPalPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/stripe', createStripePayment);
router.post('/paypal', createPayPalPayment);

module.exports = router;
