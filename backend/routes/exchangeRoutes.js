const express = require('express');
const exchangeController = require('../controllers/exchangeController');

const router = express.Router();

router.post('/buy', exchangeController.buy);
router.post('/sell', exchangeController.sell);
router.get('/transactions', exchangeController.getTransactions);

module.exports = router;
