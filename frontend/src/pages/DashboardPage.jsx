// DashboardPage.jsx
import React from 'react';
import Portfolio from '../components/Dashboard/Portfolio';
import MarketData from '../components/Dashboard/MarketData';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <Portfolio />
      <MarketData />
    </div>
  );
};

export default DashboardPage;
