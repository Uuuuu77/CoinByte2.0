import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
	<li><Link to="/exchange">Exchange</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/social">Social</Link></li>
	<li><Link to="/exchange">Exchange</Link></li>
      </ul>
      <ul className="auth-links">
        <li><Link to="/auth">Sign Up</Link></li>
        <li><Link to="/auth">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
