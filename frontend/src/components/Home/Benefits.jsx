// src/components/Home/Benefits.jsx
import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="split-container">
        <div className="split-image">
          <img src="./static/images/benefits-image.png" alt="Benefits Image" />
        </div>
        <div className="split-text">
          <h2>Benefits of Using CoinByte</h2>
          <ul>
            <li>Low transaction fees</li>
            <li>Wide range of supported cryptocurrencies</li>
            <li>Fast and secure transactions</li>
            <li>Professional customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
