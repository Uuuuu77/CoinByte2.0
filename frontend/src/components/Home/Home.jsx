// src/components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Features />
      <HowItWorks />
      <Benefits />
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
