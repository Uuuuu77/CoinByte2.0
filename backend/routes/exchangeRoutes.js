// exchangeRoutes.js
const express = require('express');
const exchangeController = require('../controllers/exchangeController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/buy', authenticateToken, exchangeController.buy);
router.post('/sell', authenticateToken, exchangeController.sell);
router.get('/transactions', authenticateToken, exchangeController.getTransactions);

module.exports = router;
