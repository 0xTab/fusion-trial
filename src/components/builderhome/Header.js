import React from 'react';

const Header = () => {
  return (
    <header className="builderhome-header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a1c8bc361acb8df03169022a689a7204d5038691?width=1490" 
            alt="MIMO Logo"
            className="logo-image"
          />
        </div>
        
        <nav className="header-nav">
          <div className="language-selector">
            <span className="language-text">LANGUAGE</span>
            <svg className="language-dropdown" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <button className="menu-button" aria-label="Menu">
            <div className="menu-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
