import React, { useState } from 'react';
import '../../styles/testflight/TestFlightContactForm.css';

const TestFlightContactForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    // You can add your email submission logic here
  };

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">
              Ask us!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TestFlightContactForm;
