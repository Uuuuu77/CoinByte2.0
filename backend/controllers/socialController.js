// socialController.js
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user._id;

    const post = new Post({
      userId,
      content,
    });

    await post.save();
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const userId = req.user._id;

    const comment = new Comment({
      postId,
      userId,
      content,
    });

    await comment.save();
    res.status(201).json({ message: 'Comment created successfully', comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createPost,
  getPosts,
  createComment,
};
