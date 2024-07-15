// DashboardPage.jsx
import React from 'react';
import Portfolio from '../components/Dashboard/Portfolio';
import MarketData from '../components/Dashboard/MarketData';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import NewsFeed from '../components/Dashboard/NewsFeed';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-widgets">
        <div className="dashboard-left">
          <PerformanceChart />
          <Portfolio />
        </div>
        <div className="dashboard-right">
          <MarketData />
          <RecentTransactions />
          <ActivityFeed />
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
