// walletRoutes.js
const express = require('express');
const walletController = require('../controllers/walletController');
const authenticateToken = require('../middleware/authMiddleware');
const { validateWalletAmount, validateTransfer } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', authenticateToken, walletController.getWallet);
router.post('/deposit', authenticateToken, validateWalletAmount, walletController.deposit);
router.post('/withdraw', authenticateToken, validateWalletAmount, walletController.withdraw);
router.post('/transfer', authenticateToken, validateTransfer, walletController.transfer);

module.exports = router;
