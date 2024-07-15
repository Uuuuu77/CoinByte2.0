import React from 'react';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import MarketData from './MarketData';
import RecentTransactions from './RecentTransactions';
import ActivityFeed from './ActivityFeed';
import PerformanceChart from './PerformanceChart';
import NewsFeed from './NewsFeed';
import './DashboardContainer.css';

const DashboardContainer = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content">
          <PerformanceChart />
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

export default DashboardContainer;
