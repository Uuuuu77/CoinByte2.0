// Features.jsx
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <div className="split-container">
        <div className="split-text">
          <h2>Key Features</h2>
          <ul>
            <li>Secure Trading Platform</li>
            <li>Real-Time Market Data</li>
            <li>User-Friendly Interface</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
        <div className="split-image">
          <img src="path/to/your/image.jpg" alt="Features Image" />
        </div>
      </div>
    </div>
  );
};

export default Features;