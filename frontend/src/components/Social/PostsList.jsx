// PostsList.jsx
import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched posts data:', data);
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
