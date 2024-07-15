import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/activity">Activity</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
