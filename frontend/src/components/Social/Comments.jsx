// Comments.jsx
import React, { useState, useEffect } from 'react';
import { createComment, fetchComments } from '../../services/api';
import './Comments.css';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const fetchedComments = await fetchComments(postId);
        if (Array.isArray(fetchedComments)) {
          setComments(fetchedComments);
        } else {
          console.error('Expected an array of comments, but got:', fetchedComments);
          setError('Failed to load comments.');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Failed to load comments.');
      }
    };

    fetchCommentsData();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createComment(postId, { content: newComment });
      setComments([...comments, response]); // Assuming response is a single comment object
      setNewComment('');
    } catch (error) {
      console.error('Error creating comment:', error);
      setError('Failed to create comment.');
    }
  };

  return (
    <div className="comments">
      {error && <p className="error-message">{error}</p>}
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
        {Array.isArray(comments) ? (
          comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <span>{new Date(comment.createdAt).toLocaleString()}</span>
            </li>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </ul>
    </div>
  );
};

export default Comments;
