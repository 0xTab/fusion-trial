import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="title-container">
          <h1 className="main-title">MIMO - Web3.0 Social Platform</h1>
          <p className="subtitle">Creating a world without borders</p>
        </div>
        
        <button className="download-btn">
          <svg className="download-icon" width="20" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M3 10.0035V17.5H18V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.25 9.5835L10.5 13.3335L6.75 9.5835" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4966 2.5V13.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Download Now</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
