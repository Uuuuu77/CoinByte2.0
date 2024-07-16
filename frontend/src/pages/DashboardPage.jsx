// DashboardPage.jsx
import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Portfolio from '../components/Dashboard/Portfolio';
import MarketData from '../components/Dashboard/MarketData';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import NewsFeed from '../components/Dashboard/NewsFeed';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
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

export default DashboardPage;
