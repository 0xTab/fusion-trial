import React from 'react';

const Header = () => {
  return (
    <header className="home-header">
      <div className="header-content">
        <div className="back-to-home">
          <svg className="back-icon" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 5L7.5 12.5L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to home</span>
        </div>
        
        <div className="logo">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="30" fill="url(#logoGradient)"/>
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#5AEFA7'}}/>
                <stop offset="100%" style={{stopColor: '#42EBAE'}}/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
