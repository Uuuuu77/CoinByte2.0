// Banner.jsx
import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/images/welcome-image.jpeg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="split-container">
        <div className="split-text">
          <h2>Welcome to CoinByte</h2>
          <p>Experience seamless cryptocurrency trading with CoinByte. Buy, sell, and trade various cryptocurrencies with ease.</p>
        </div>
        <div className="split-image">
          <img src={bannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
