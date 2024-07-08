const express = require('express');
const supportController = require('../controllers/supportController');

const router = express.Router();

router.post('/support/ticket', supportController.createTicket);
router.get('/support/tickets', supportController.getTickets);

module.exports = router;
