// supportRoutes.js
const express = require('express');
const supportController = require('../controllers/supportController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/ticket', authenticateToken, supportController.createTicket);
router.get('/tickets', authenticateToken, supportController.getTickets);

module.exports = router;
