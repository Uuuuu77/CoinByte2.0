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
      {/* Toggle button for the sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>CoinByte</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/exchange">Exchange</Link></li>
          <li><Link to="/wallet">Wallet</Link></li>
          <li><Link to="/social">Social</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
