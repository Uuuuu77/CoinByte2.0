// authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/google_login', authController.googleLogin);
router.get('/google_login/callback', authController.googleCallback);
router.post('/logout', authController.logout);  // Adding logout route

module.exports = router;
