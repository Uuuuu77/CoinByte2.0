// tradeRoutes.js
const express = require('express');
const tradeController = require('../controllers/tradeController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/buy', authenticateToken, tradeController.buy);
router.post('/sell', authenticateToken, tradeController.sell);
router.get('/transactions', authenticateToken, tradeController.getTransactions);

module.exports = router;
