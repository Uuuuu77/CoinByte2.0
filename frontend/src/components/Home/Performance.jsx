import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Performance = () => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        setPerformance(response.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformance();
  }, []);

  return (
    <div className="performance">
      <h2>Cryptocurrency Performance</h2>
      <ul>
        {performance.map((data) => (
          <li key={data.id}>
            <p>{data.name}: {data.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Performance;
