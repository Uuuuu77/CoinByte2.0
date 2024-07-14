// src/components/Home/Features.jsx
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="split-container">
        <div className="split-image">
          <img src="./static/images/features-image.jpeg" alt="Features Image" />
        </div>
        <div className="split-text">
          <h2>Key Features</h2>
          <ul>
            <li>Secure Trading Platform</li>
            <li>Real-Time Market Data</li>
            <li>User-Friendly Interface</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
