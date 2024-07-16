/**
 * Footer.jsx
 *
 * Footer component displaying copyright information, privacy policy, terms of service,
 * and social media links.
 */

import React from 'react';
import './Footer.css';
import twitterImage from '../../assets/images/twitter.png';
import linkedinImage from '../../assets/images/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2024 CoinByte. All rights reserved.</p>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
        <div className="social-links">
          <img className="logo" src={twitterImage} alt="Twitter" />
          <img className="logo" src={linkedinImage} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
