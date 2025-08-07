import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
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
        
        <div className="header-right">
          <div className="language-selector">
            <span>LANGUAGE</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#FFFFFF" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="menu-button">
            <svg width="33" height="21" viewBox="0 0 33 21" fill="none">
              <path d="M0 0h33v3H0z" fill="#FFFFFF"/>
              <path d="M0 9h33v3H0z" fill="#FFFFFF"/>
              <path d="M0 18h33v3H0z" fill="#FFFFFF"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
