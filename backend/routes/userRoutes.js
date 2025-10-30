// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const { validateUsername } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/:username', authenticateToken, validateUsername, userController.getUser);
router.put('/:username', authenticateToken, validateUsername, userController.updateUser);

module.exports = router;
