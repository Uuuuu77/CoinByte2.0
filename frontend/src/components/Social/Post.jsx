// Post.jsx
import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ post }) => {
  useEffect(() => {
    if (!post || typeof post !== 'object') {
      console.error('Post data is invalid:', post);
    }
  }, [post]);

  if (!post || typeof post !== 'object') {
    return <div>Invalid post data</div>;
  }

  return (
    <div className="post">
      <p>{post.content}</p>
      <span>{new Date(post.createdAt).toLocaleString()}</span>
    </div>
  );
};

export default Post;
