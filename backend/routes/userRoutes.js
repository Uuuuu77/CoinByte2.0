const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);

module.exports = router;
