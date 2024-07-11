// walletRoutes.js
const express = require('express');
const walletController = require('../controllers/walletController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/wallet', authenticateToken, walletController.getWallet);
router.put('/wallet', authenticateToken, walletController.updateWallet);
router.post('/wallet/transaction', authenticateToken, walletController.createTransaction);

module.exports = router;
