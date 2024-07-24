// Post.jsx
import React, { useState } from 'react';
import Comments from './Comments';
import './Post.css';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  if (!post || !post.id || !post.content) { // Updated to match mock data
    return <div className="post">Post data is not available.</div>;
  }

  return (
    <div className="post">
      <p>{post.content}</p>
      <span>{new Date().toLocaleString()}</span> {/* Mock data doesn't include createdAt */}
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <Comments postId={post.id} />} {/* Updated to match mock data */}
    </div>
  );
};

export default Post;
