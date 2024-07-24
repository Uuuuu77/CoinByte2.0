// Comments.jsx
import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ postId }) => {
  const [newComment, setNewComment] = useState('');

  // Function to handle new comment submission (mock implementation)
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="comments">
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          required
        ></textarea>
        <button type="submit">Comment</button>
      </form>
      {/* Mock comments list */}
      <ul>
        <li>No comments yet.</li>
      </ul>
    </div>
  );
};

export default Comments;
