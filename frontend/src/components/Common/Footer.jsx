import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2024 CoinByte. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
        <div className="social-links">
          <img className="logo" src="./static/images/twitter.png" alt="Twitter" />
          <img className="logo" src="./static/images/linkedin.png" alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
