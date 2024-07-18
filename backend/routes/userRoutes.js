// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', authenticateToken, userController.getUser);
router.put('/:id', authenticateToken, userController.updateUser);

module.exports = router;
