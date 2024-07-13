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
	<li><Link to="/auth/signup">Signup</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
