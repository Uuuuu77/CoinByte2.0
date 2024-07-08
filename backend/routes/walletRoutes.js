const express = require('express');
const walletController = require('../controllers/walletController');

const router = express.Router();

router.get('/wallet/:id', walletController.getWallet);
router.post('/wallet/transaction', walletController.createTransaction);

module.exports = router;
