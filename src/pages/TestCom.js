import React from 'react';
import '../styles/TestCom.css';

const TestCom = () => {
  return (
    <div className="testcom-page">
      <header className="testcom-header">
        <div className="header-content">
          <div className="logo-section">
            <svg className="mimo-logo-icon" viewBox="0 0 40 40" fill="none">
              <rect width="20" height="20" fill="#43FFBB"/>
              <rect x="20" y="0" width="20" height="20" fill="#43FFBB"/>
              <rect x="0" y="20" width="20" height="20" fill="#43FFBB"/>
              <rect x="20" y="20" width="20" height="20" fill="#43FFBB"/>
              <circle cx="10" cy="30" r="4" fill="#43FFBB"/>
              <circle cx="30" cy="30" r="4" fill="#43FFBB"/>
            </svg>
          </div>
          
          <nav className="main-nav">
            <span className="nav-text">MIMO</span>
          </nav>
          
          <div className="header-controls">
            <div className="language-selector">
              <span className="language-text">LANGUAGE</span>
              <svg className="dropdown-arrow" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <button className="menu-button">
              <div className="menu-lines">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      <main className="testcom-main">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="brand-title">MIMO</h1>
            <h2 className="hero-title">
              <span className="title-white">Social Platform</span>
              <span className="title-gradient">for Web3.0.</span>
            </h2>
            <p className="hero-description">
              An instant messaging social platform for Web3.0.
            </p>
            <button className="cta-button">
              Get Early Acces
            </button>
          </div>
        </div>
        
        <div className="hero-illustration">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b4989bc6345ab45fff2a03d27201df373fa70648?width=1458" 
            alt="MIMO Social Platform Illustration" 
            className="illustration-image"
          />
        </div>
      </main>
    </div>
  );
};

export default TestCom;
