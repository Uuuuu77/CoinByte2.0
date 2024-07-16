// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/market">Market</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
