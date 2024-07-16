// MarketData.jsx
import React, { useState, useEffect } from 'react';
import { fetchMarketData } from '../../services/api';
import './MarketData.css';

const MarketData = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error loading market data:', error);
      }
    };

    loadMarketData();
  }, []);

  return (
    <div className="market-data">
      <h2>Market Data</h2>
      <ul>
        {marketData.map((data) => (
          <li key={data.id} className="market-data-item">
            <p>{data.name}: {data.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketData;
