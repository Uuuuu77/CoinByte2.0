// index.js
const express = require('express');
const authRoutes = require('./authRoutes');
const tradeRoutes = require('./tradeRoutes');
const socialRoutes = require('./socialRoutes');
const supportRoutes = require('./supportRoutes');
const userRoutes = require('./userRoutes');
const walletRoutes = require('./walletRoutes');
const activityLogRoutes = require('./activityLogRoutes');
const newsRoutes = require('./newsRoutes');
const messageRoutes = require('./messageRoutes');
const notificationRoutes = require('./notificationRoutes');
const paymentRoutes = require('./paymentRoutes');
const subscribeRoutes = require('./subscribeRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/trade', tradeRoutes);
router.use('/social', socialRoutes);
router.use('/support', supportRoutes);
router.use('/user', userRoutes);
router.use('/wallet', walletRoutes);
router.use('/activity-logs', activityLogRoutes);
router.use('/news', newsRoutes);
router.use('/messages', messageRoutes);
router.use('/notifications', notificationRoutes);
router.use('/payments', paymentRoutes);
router.use('/subscribe', subscribeRoutes);

module.exports = router;
