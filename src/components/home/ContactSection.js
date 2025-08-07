import React from 'react';
import FigmaButton from '../common/FigmaButton.jsx';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            Get a head start on MIMO developer project to obtain multiple advantages.
          </p>
          
          <div className="contact-button">
            <FigmaButton 
              variant="primary"
              size="large"
              onClick={() => console.log('Send Message clicked')}
            >
              SEND MESSAGE
            </FigmaButton>
          </div>
        </div>
        
        <div className="contact-visual">
          <div className="contact-image">
            <img src="../../assets/images/club-app.png" alt="Contact MIMO" />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="contact-background">
        <div className="bg-gradient"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
