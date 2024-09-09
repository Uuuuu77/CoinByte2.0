// FAQ.jsx
import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        <li className="faq-item">
          <strong>Question 1:</strong> How do I reset my password?
          <p>Answer: Go to the account settings and select "Reset Password".</p>
        </li>
        <li className="faq-item">
          <strong>Question 2:</strong> How do I contact support?
          <p>Answer: Use the support chat or submit a ticket via the support form.</p>
        </li>
        {/* Add more FAQ items here */}
      </ul>
    </div>
  );
};

export default FAQ;
