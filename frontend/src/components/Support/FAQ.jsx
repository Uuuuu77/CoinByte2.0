// FAQ.jsx

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { question: "How do I reset my password?", answer: "To reset your password, go to the account settings..." },
    { question: "How can I verify my account?", answer: "Verification is done by submitting the required documents..." },
    // More FAQs...
  ];

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} onClick={() => toggleFAQ(index)} className={openFAQ === index ? 'open' : ''}>
            <div className="faq-question">{faq.question}</div>
            {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
