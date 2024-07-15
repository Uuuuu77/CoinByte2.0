import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news'); // Replace with your API endpoint
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>Cryptocurrency News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.id} className="news-item">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
