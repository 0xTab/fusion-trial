import React from 'react';
import FigmaButton from '../common/FigmaButton';
import './ContactUsSection.css';

const ContactUsSection = () => {
  return (
    <section className="contact-us-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              Get a head start on MIMO developer project to obtain multiple advantages.
            </p>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Enter your name" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="Enter your email" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Enter your message" rows="4"></textarea>
              </div>
              
              <div className="form-submit">
                <FigmaButton 
                  variant="primary"
                  size="large"
                  onClick={() => console.log('Send message clicked')}
                >
                  SEND MESSAGE
                </FigmaButton>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon"></div>
                <div className="info-content">
                  <h3 className="info-title">Initial advantage</h3>
                  <p className="info-description">Get a large number of users in no time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-background">
          <div className="contact-bg-element contact-bg-element--1"></div>
          <div className="contact-bg-element contact-bg-element--2"></div>
          <div className="contact-bg-element contact-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
