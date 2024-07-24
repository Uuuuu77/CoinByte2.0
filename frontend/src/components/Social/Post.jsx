// Post.jsx
import React, { useState, useEffect } from 'react';
import Comments from './Comments';

import './Post.css';

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    console.log('Post data:', post);
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
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <Comments postId={post._id} />}
    </div>
  );
};

export default Post;
