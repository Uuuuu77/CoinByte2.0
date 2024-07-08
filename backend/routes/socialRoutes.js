const express = require('express');
const socialController = require('../controllers/socialController');

const router = express.Router();

router.get('/messages', socialController.getMessages);
router.post('/message', socialController.createMessage);

module.exports = router;
