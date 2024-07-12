// SocialPage.jsx
import React from 'react';
import Forums from '../components/Social/Forums';
import Messaging from '../components/Social/Messaging';
import UserProfile from '../components/Social/UserProfile';
import '../styles/SocialPage.css';

const SocialPage = () => {
  return (
    <div className="social-page">
      <h2>Social</h2>
      <Forums />
      <Messaging />
      <UserProfile />
    </div>
  );
};

export default SocialPage;
