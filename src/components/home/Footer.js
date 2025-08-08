import React from 'react';
import '../../styles/home/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-circle"></div>
                <div className="logo-text">MIMO</div>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>Copyright © 2022 MIMO. All rights reserved.</p>
            </div>
          </div>
          
          <div className="footer-social">
            <div className="social-links">
              <a href="#" className="social-link social-link--twitter">
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link social-link--instagram">
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link social-link--facebook">
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link social-link--discord">
                <div className="social-icon"></div>
              </a>
              <a href="#" className="social-link social-link--medium">
                <div className="social-icon"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
