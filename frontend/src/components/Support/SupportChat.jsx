// SupportChat.jsx

import React from 'react';
import './SupportChat.css';

const SupportChat = () => {
  return (
    <div className="support-chat-container">
      <h2>Live Support Chat</h2>
      <div className="chat-box">
        <p><strong>Support Agent:</strong> How can I help you today?</p>
        <p><strong>You:</strong> I need assistance with my account.</p>
        {/* Chat messages */}
      </div>
      <input type="text" placeholder="Type your message here..." className="chat-input" />
    </div>
  );
};

export default SupportChat;
