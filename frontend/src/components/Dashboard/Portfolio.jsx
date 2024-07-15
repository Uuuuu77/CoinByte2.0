import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('/api/portfolio'); // Replace with your API endpoint
        setPortfolio(response.data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="portfolio">
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map((item) => (
          <li key={item.id} className="portfolio-item">
            <p>{item.name}: {item.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
