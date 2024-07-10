// socialRoutes.js
const express = require('express');
const { createPost, getPosts, createComment } = require('../controllers/socialController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/posts', authenticateToken, createPost);
router.get('/posts', authenticateToken, getPosts);
router.post('/comments', authenticateToken, createComment);

module.exports = router;
