const express = require('express');
const exchangeController = require('../controllers/exchangeController');

const router = express.Router();

router.post('/trade', exchangeController.trade);
router.get('/orders', exchangeController.getOrders);

module.exports = router;
