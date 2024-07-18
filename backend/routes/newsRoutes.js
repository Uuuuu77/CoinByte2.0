// newsRoutes.js
const express = require('express');
const { getNews, createNews } = require('../controllers/newsController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getNews);
router.post('/', authenticateToken, createNews);

module.exports = router;
