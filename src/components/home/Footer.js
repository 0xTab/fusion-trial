import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-image">
              <img src="../../assets/images/logo-background.png" alt="MIMO Logo" />
            </div>
            <div className="logo-text">
              <svg width="107" height="21" viewBox="0 0 107 21" fill="none">
                <path d="M0 0.17h26.86v20.47H0z" fill="#FFFFFF"/>
                <path d="M33.86 0.17h6.79v20.47h-6.79z" fill="#FFFFFF"/>
                <path d="M47.67 0.17h26.86v20.47H47.67z" fill="#FFFFFF"/>
                <path d="M80.83 0h26.42v20.82H80.83z" fill="#FFFFFF"/>
              </svg>
            </div>
          </div>
          
          <div className="footer-social">
            <div className="social-icons">
              <a href="#" className="social-icon twitter">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2.33334C7.56 2.33334 2.33334 7.56 2.33334 14C2.33334 20.44 7.56 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33334 14 2.33334ZM19.8333 10.5L18.1667 19.8333H15.1667L16.8333 10.5H19.8333Z" fill="#359EFF"/>
                </svg>
              </a>
              <a href="#" className="social-icon instagram">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2.33334C7.56 2.33334 2.33334 7.56 2.33334 14C2.33334 20.44 7.56 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33334 14 2.33334ZM19.8333 10.5L18.1667 19.8333H15.1667L16.8333 10.5H19.8333Z" fill="#F85471"/>
                </svg>
              </a>
              <a href="#" className="social-icon facebook">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2.33334C7.56 2.33334 2.33334 7.56 2.33334 14C2.33334 20.44 7.56 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33334 14 2.33334ZM19.8333 10.5L18.1667 19.8333H15.1667L16.8333 10.5H19.8333Z" fill="#5372FF"/>
                </svg>
              </a>
              <a href="#" className="social-icon discord">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2.33334C7.56 2.33334 2.33334 7.56 2.33334 14C2.33334 20.44 7.56 25.6667 14 25.6667C20.44 25.6667 25.6667 20.44 25.6667 14C25.6667 7.56 20.44 2.33334 14 2.33334ZM19.8333 10.5L18.1667 19.8333H15.1667L16.8333 10.5H19.8333Z" fill="#6850FF"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>Copyright © 2022 MIMO. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
