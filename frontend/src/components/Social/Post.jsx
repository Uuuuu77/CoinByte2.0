// Post.jsx
import React, { useState } from 'react';
import Comments from './Comments';
import './Post.css';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  if (!post || !post._id || !post.content) {
    return <div className="post">Post data is not available.</div>;
  }

  return (
    <div className="post">
      <p>{post.content}</p>
      <span>{new Date(post.createdAt).toLocaleString()}</span>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <Comments postId={post._id} />}
    </div>
  );
};

export default Post;
