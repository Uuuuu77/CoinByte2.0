import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header-container">
        <h1>Welcome to CoinByte</h1>
        <p>Your one-stop cryptocurrency exchange platform.</p>
        <div className="navigation-buttons">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/exchange" className="nav-link">Exchange</Link>
          <Link to="/wallet" className="nav-link">Wallet</Link>
          <Link to="/social" className="nav-link">Social</Link>
          <Link to="/support" className="nav-link">Support</Link>
        </div>
      </header>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Secure Trading Platform</li>
          <li>Real-Time Market Data</li>
          <li>User-Friendly Interface</li>
          <li>24/7 Customer Support</li>
        </ul>
      </section>
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up for an account</li>
          <li>Deposit funds into your wallet</li>
          <li>Start trading cryptocurrencies</li>
          <li>Withdraw cryptocurrencies into external wallets or bank account</li>
        </ol>
      </section>
      <section className="benefits-section">
        <h2>Benefits of Using CoinByte</h2>
        <ul>
          <li>Low transaction fees</li>
          <li>Wide range of supported cryptocurrencies</li>
          <li>Fast and secure transactions</li>
          <li>Professional customer support</li>
        </ul>
      </section>
      <section className="cta-section">
        <h2>Join Us Today!</h2>
        <p>Sign up now and start trading cryptocurrencies with ease.</p>
        <Link to="/auth/signup" className="cta-button">Sign Up</Link>
      </section>
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"CoinByte made crypto trading so much easier and secure. Highly recommend!" - User A</p>
        </div>
        <div className="testimonial">
          <p>"Great platform with excellent customer support." - User B</p>
        </div>
      </section>
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates and news.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
