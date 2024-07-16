// Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { fetchPortfolio } from '../../services/api';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const data = await fetchPortfolio();
        setPortfolio(data);
      } catch (error) {
        console.error('Error loading portfolio:', error);
      }
    };

    loadPortfolio();
  }, []);

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      {portfolio ? (
        <div>
          <p>Total Value: {portfolio.totalValue}</p>
          <ul>
            {portfolio.assets.map((asset) => (
              <li key={asset.id} className="portfolio-item">
                <p>{asset.name}: {asset.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading portfolio...</p>
      )}
    </div>
  );
};

export default Portfolio;
