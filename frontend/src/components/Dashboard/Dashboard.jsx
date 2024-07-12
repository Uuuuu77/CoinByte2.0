import React from 'react';
import Portfolio from './Portfolio';
import MarketData from './MarketData';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <Portfolio />
        <MarketData />
      </div>
    </div>
  );
};

export default Dashboard;

