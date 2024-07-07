const Post = require('../models/Post');  // Assuming you have a Post model defined
const Comment = require('../models/Comment');  // Assuming you have a Comment model defined

const createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.user._id;

  const post = new Post({
    userId,
    content,
  });

  await post.save();

  res.status(201).json({ message: 'Post created successfully', post });
};

const getPosts = async (req, res) => {
  const posts = await Post.find().populate('userId', 'username');

  res.json(posts);
};

const createComment = async (req, res) => {
  const { postId, content } = req.body;
  const userId = req.user._id;

  const comment = new Comment({
    postId,
    userId,
    content,
  });

  await comment.save();

  res.status(201).json({ message: 'Comment created successfully', comment });
};

module.exports = {
  createPost,
  getPosts,
  createComment,
};
