import React from 'react';
import { Line } from 'react-chartjs-2';
import './PerformanceChart.css';

const PerformanceChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="performance-chart">
      <h2>Performance Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;
