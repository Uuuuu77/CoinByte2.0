// NewsFeed.jsx
import React, { useState, useEffect } from 'react';
import { fetchNews } from '../../services/api';
import './NewsFeed.css';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error('Error loading news:', error);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      <ul>
        {news.map((newsItem) => (
          <li key={newsItem.id} className="news-item">
            <p>{newsItem.title}</p>
            <p>{newsItem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
