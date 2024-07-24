// SocialPage.jsx
import React, { useState } from 'react';
import Forums from '../components/Social/Forums';
import Messaging from '../components/Social/Messaging';
import UserProfile from '../components/Social/UserProfile';
import Post from '../components/Social/Post';
import Notifications from '../components/Social/Notifications';
import Comments from '../components/Social/Comments';
import '../styles/SocialPage.css';
import { FaForumbee, FaEnvelope, FaUser, FaPen, FaBell, FaComment } from 'react-icons/fa';

const SocialPage = () => {
  const [activeTab, setActiveTab] = useState('forums');

  const renderContent = () => {
    switch (activeTab) {
      case 'forums':
        return <Forums />;
      case 'messaging':
        return <Messaging />;
      case 'profile':
        return <UserProfile />;
      case 'post':
        return <Post />;
      case 'notifications':
        return <Notifications />;
      case 'comments':
        return <Comments />;
      default:
        return <Forums />;
    }
  };

  return (
    <div className="social-page">
      <h2>Social</h2>
      <nav className="social-nav">
        <button onClick={() => setActiveTab('forums')} className={activeTab === 'forums' ? 'active' : ''}>
          <FaForumbee /> Forums
        </button>
        <button onClick={() => setActiveTab('messaging')} className={activeTab === 'messaging' ? 'active' : ''}>
          <FaEnvelope /> Messaging
        </button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>
          <FaUser /> Profile
        </button>
        <button onClick={() => setActiveTab('post')} className={activeTab === 'post' ? 'active' : ''}>
          <FaPen /> Post
        </button>
        <button onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>
          <FaBell /> Notifications
        </button>
        <button onClick={() => setActiveTab('comments')} className={activeTab === 'comments' ? 'active' : ''}>
          <FaComment /> Comments
        </button>
      </nav>
      <div className="social-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SocialPage;
