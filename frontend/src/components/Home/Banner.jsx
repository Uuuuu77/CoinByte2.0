// src/components/Home/Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="split-container">
        <div className="split-text">
          <h2>Welcome to CoinByte</h2>
          <p>Experience seamless cryptocurrency trading with CoinByte. Buy, sell, and trade various cryptocurrencies with ease.</p>
        </div>
        <div className="split-image">
          <img src="./static/images/welcome-image.jpeg" alt="Welcome Image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
