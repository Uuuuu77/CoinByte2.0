// Dashboard.jsx
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
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-widgets">
        <div className="dashboard-left">
          <div className="widget">
            <Portfolio />
          </div>
          <div className="widget">
            <PerformanceChart />
          </div>
          <div className="widget">
            <RecentTransactions />
          </div>
        </div>
        <div className="dashboard-right">
          <div className="widget">
            <MarketData />
          </div>
          <div className="widget">
            <ActivityFeed />
          </div>
          <div className="widget">
            <NewsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
