// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to CoinByte</h1>
      <p>Your one-stop cryptocurrency exchange platform.</p>
      <div className="navigation-buttons">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/exchange" className="nav-link">Exchange</Link>
        <Link to="/wallet" className="nav-link">Wallet</Link>
        <Link to="/social" className="nav-link">Social</Link>
        <Link to="/support" className="nav-link">Support</Link>
      </div>
    </div>
  );
};

export default HomePage;
