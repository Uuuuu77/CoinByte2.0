import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="user-info">
        <p>Welcome, User!</p>
        {/* Add user avatar and other info if needed */}
      </div>
    </header>
  );
};

export default DashboardHeader;
