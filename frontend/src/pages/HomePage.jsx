// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner';
import Features from '../components/Home/Features';
import Benefits from '../components/Home/Benefits';
import HowItWorks from '../components/Home/HowItWorks';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header-container">
        <h1>Welcome to CoinByte</h1>
        <p>Your one-stop cryptocurrency exchange platform.</p>
        <div className="navigation-buttons">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/trade" className="nav-link">Trade</Link>
          <Link to="/wallet" className="nav-link">Wallet</Link>
          <Link to="/social" className="nav-link">Social</Link>
          <Link to="/support" className="nav-link">Support</Link>
        </div>
      </header>
      <Banner />
      <Features />
      <HowItWorks />
      <Benefits />
      <section className="cta-section">
        <h2>Join Us Today!</h2>
        <p>Sign up now and start trading cryptocurrencies with ease.</p>
        <Link to="/auth/signup" className="cta-button">Sign Up</Link>
      </section>
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"CoinByte made crypto trading so much easier and secure. Highly recommend!" - John Doe</p>
        </div>
        <div className="testimonial">
          <p>"Great platform with excellent customer support." - Richard Roe</p>
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
