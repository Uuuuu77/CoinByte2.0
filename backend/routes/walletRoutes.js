// walletRoutes.js
const express = require('express');
const walletController = require('../controllers/walletController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, walletController.getWallet);
router.post('/deposit', authenticateToken, walletController.deposit);
router.post('/withdraw', authenticateToken, walletController.withdraw);
router.post('/transfer', authenticateToken, walletController.transfer);

module.exports = router;
