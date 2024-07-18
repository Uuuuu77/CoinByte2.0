// socialController.js
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Creates a new post
exports.createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.user._id;

  try {
    const post = new Post({ userId, content });
    await post.save();
    res.status(201).json({ success: true, message: 'Post created successfully', data: post });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Error creating post' });
  }
};

// Fetches all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username');
    res.json({ success: true, data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching posts' });
  }
};

// Creates a new comment
exports.createComment = async (req, res) => {
  const { postId, content } = req.body;
  const userId = req.user._id;

  try {
    const comment = new Comment({ postId, userId, content });
    await comment.save();
    res.status(201).json({ success: true, message: 'Comment created successfully', data: comment });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Error creating comment' });
  }
};

// Fetches comments for a specific post
exports.getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate('userId', 'username');
    res.json({ success: true, data: comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching comments' });
  }
};
