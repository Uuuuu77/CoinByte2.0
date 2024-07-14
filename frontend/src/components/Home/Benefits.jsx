// Benefits.jsx
import React from 'react';
import './Benefits.css';
import benefitsImage from '../../assets/images/benefits-image.png';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="split-container">
        <div className="split-text">
          <h2>Benefits of Using CoinByte</h2>
          <ul>
            <li>Low transaction fees</li>
            <li>Wide range of supported cryptocurrencies</li>
            <li>Fast and secure transactions</li>
            <li>Professional customer support</li>
          </ul>
        </div>
	<div className="split-image">
	  <img src={benefitsImage} alt="Benefits Image" />
	</div>
      </div>
    </div>
  );
};

export default Benefits;
