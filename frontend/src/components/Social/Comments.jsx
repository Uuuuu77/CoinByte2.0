// Comments.jsx
import React, { useState, useEffect } from 'react';
import { createComment, fetchComments } from '../../services/api'; // Import APIs
import './Comments.css';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const fetchedComments = await fetchComments(postId); // Use the API function
        if (Array.isArray(fetchedComments)) { // Check if the response is an array
          setComments(fetchedComments);
        } else {
          console.error('Expected an array of comments, but got:', fetchedComments);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
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
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
