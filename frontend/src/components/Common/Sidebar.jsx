import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/exchange">Exchange</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/social">Social</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
