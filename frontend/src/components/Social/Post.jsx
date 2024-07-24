// Post.jsx
import React, { useState } from 'react';
import Comments from './Comments';
import { createPost } from '../services/api';
import './Post.css';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post">
      <p>{post.content}</p>
      <span>{new Date(post.createdAt).toLocaleString()}</span>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <Comments postId={post.id} />}
    </div>
  );
};

export default Post;
