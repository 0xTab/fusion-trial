import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/src/assets/images/hero-background.png" alt="Hero Background" className="hero-bg-image" />
        <div className="hero-gradient-overlay">
          <img src="/src/assets/images/gradient-overlay.png" alt="Gradient Overlay" />
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-main">Social Platform</span>
            <span className="title-accent">for Web3.0.</span>
          </h1>
          <p className="hero-description">
            An instant messaging social platform for Web3.0.
          </p>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src="/src/assets/images/hero-image.png" alt="Hero Visual" className="hero-image" />
          </div>
          <div className="hero-elements">
            <div className="element-circle element-1"></div>
            <div className="element-circle element-2"></div>
            <div className="element-shapes">
              <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H50V60H0V0Z" fill="#43FFBB"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-cta">
        <button className="cta-button">
          <span className="button-text">Get Started</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 