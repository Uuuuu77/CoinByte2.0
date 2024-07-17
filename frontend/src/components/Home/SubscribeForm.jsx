// SubscribeForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SubscribeForm.css';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-base-url.com/api/subscribe', { email });
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="subscribe-form-container">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SubscribeForm;
