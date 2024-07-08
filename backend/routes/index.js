const express = require('express');

const authRoutes = require('./authRoutes');
const exchangeRoutes = require('./exchangeRoutes');
const socialRoutes = require('./socialRoutes');
const supportRoutes = require('./supportRoutes');
const userRoutes = require('./userRoutes');
const walletRoutes = require('./walletRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/exchange', exchangeRoutes);
router.use('/social', socialRoutes);
router.use('/support', supportRoutes);
router.use('/user', userRoutes);
router.use('/wallet', walletRoutes);

module.exports = router;
