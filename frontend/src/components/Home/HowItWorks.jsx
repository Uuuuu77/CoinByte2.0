// src/components/Home/HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="split-container">
        <div className="split-text">
          <h2>How It Works</h2>
          <ol>
            <li>Sign up for an account</li>
            <li>Deposit funds into your wallet</li>
            <li>Start trading cryptocurrencies</li>
            <li>Withdraw cryptocurrencies into external wallets or bank account</li>
          </ol>
        </div>
        <div className="split-image">
          <img src="./static/images/how-it-works-image.jpeg" alt="How It Works Image" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
