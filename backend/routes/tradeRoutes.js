// tradeRoutes.js
const express = require('express');
const tradeController = require('../controllers/tradeController');
const authenticateToken = require('../middleware/authMiddleware');
const { validateTrade } = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/buy', authenticateToken, validateTrade, tradeController.buy);
router.post('/sell', authenticateToken, validateTrade, tradeController.sell);
router.get('/transactions', authenticateToken, tradeController.getTransactions);

module.exports = router;
