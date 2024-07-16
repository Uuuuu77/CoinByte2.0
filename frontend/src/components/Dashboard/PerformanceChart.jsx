// PerformanceChart.jsx
import React, { useState, useEffect } from 'react';
import { fetchPerformanceChartData } from '../../services/api';
import './PerformanceChart.css';

const PerformanceChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const data = await fetchPerformanceChartData();
        setChartData(data);
      } catch (error) {
        console.error('Error loading performance chart data:', error);
      }
    };

    loadChartData();
  }, []);

  return (
    <div className="performance-chart">
      <h2>Performance Chart</h2>
      {chartData ? (
        <div>
          {/* Render chart here using chartData */}
          <p>Chart data loaded successfully</p>
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default PerformanceChart;
