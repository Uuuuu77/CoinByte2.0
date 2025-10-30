// socialRoutes.js
const express = require('express');
const { createPost, getPosts, createComment } = require('../controllers/socialController');
const authenticateToken = require('../middleware/authMiddleware');
const { validatePost, validateComment } = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/posts', authenticateToken, validatePost, createPost);
router.get('/posts', authenticateToken, getPosts);
router.post('/comments', authenticateToken, validateComment, createComment);

module.exports = router;
