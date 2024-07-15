import React from 'react';
import Portfolio from './Portfolio';
import MarketData from './MarketData';
import RecentTransactions from './RecentTransactions';
import ActivityFeed from './ActivityFeed';
import PerformanceChart from './PerformanceChart';
import NewsFeed from './NewsFeed';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <PerformanceChart />
        <div className="dashboard-widgets">
          <Portfolio />
          <MarketData />
          <RecentTransactions />
          <ActivityFeed />
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
