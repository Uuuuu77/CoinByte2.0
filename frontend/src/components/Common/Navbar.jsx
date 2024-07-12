// Navbar.jsx
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/auth');
  };

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
        {isAuthenticated ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/auth">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
