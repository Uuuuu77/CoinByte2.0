/**
 * Navbar.jsx
 *
 * Navigation bar component with links to different sections of the application,
 * including Home, Dashboard, Exchange, Wallet, Social, and Support. Also includes
 * authentication links for Signup and Login, and a DarkModeToggle component.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CoinByte</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/exchange">Exchange</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/social">Social</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
      <div className="navbar-auth-links">
        <Link to="/auth/signup">Signup</Link>
        <Link to="/auth/login">Login</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
