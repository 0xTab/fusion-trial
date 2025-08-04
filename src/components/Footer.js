import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', color: '#359EFF' },
    { name: 'Instagram', icon: '📷', color: '#F85471' },
    { name: 'Facebook', icon: '📘', color: '#5372FF' },
    { name: 'Discord', icon: '🎮', color: '#6850FF' },
    { name: 'Medium', icon: '📝', color: '#363636' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-background">
                <img src="/src/assets/images/logo-background.png" alt="Logo Background" />
              </div>
              <div className="logo-text">
                <svg width="101" height="21" viewBox="0 0 101 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.17H25.42V20.52H0V0.17Z" fill="white"/>
                  <path d="M32.04 0.17H38.46V20.52H32.04V0.17Z" fill="white"/>
                  <path d="M45.12 0.17H70.54V20.52H45.12V0.17Z" fill="white"/>
                  <path d="M76.5 0H101.5V20.7H76.5V0Z" fill="white"/>
                </svg>
              </div>
            </div>
            
            <div className="footer-nav">
              <a href="/home" className="footer-nav-link">HOME</a>
              <a href="/roadmap" className="footer-nav-link">ROADMAP</a>
              <a href="/web" className="footer-nav-link">MIMO for Web</a>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`}
                  className="social-link"
                  style={{ backgroundColor: social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <div className="footer-language">
              <span className="language-label">LANGUAGE</span>
              <div className="language-selector">
                <span className="language-option">English</span>
                <span className="language-option">繁體中文</span>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>Copyright © 2022 MIMO. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 