// Comments.jsx
import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ postId }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock submission - replace with actual API call
      await createComment({ postId, content: newComment });
      console.log('New comment:', newComment);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
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
      <ul>
        <li>No comments yet.</li>
      </ul>
    </div>
  );
};

export default Comments;
