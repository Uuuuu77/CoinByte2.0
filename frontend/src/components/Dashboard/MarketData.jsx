import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketData = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        setMarketData(response.data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="market-data">
      <h2>Market Data</h2>
      <ul>
        {marketData.map((data) => (
          <li key={data.id}>
            <p>{data.name}: {data.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketData;
