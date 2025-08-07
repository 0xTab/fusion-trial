import React from 'react';
import FigmaButton from '../common/FigmaButton';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">MIMO</span>
            <span className="hero-title-subtitle">Social Platform</span>
            <span className="hero-title-highlight">for Web3.0.</span>
          </h1>
          
          <p className="hero-description">
            An instant messaging social platform for Web3.0.
          </p>
          
          <div className="hero-cta">
            <FigmaButton 
              variant="gradient"
              size="large"
              onClick={() => console.log('Get Early Access clicked')}
            >
              Get Early Acces
            </FigmaButton>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-background-elements">
            <div className="hero-element hero-element--1"></div>
            <div className="hero-element hero-element--2"></div>
            <div className="hero-element hero-element--3"></div>
          </div>
          
          <div className="hero-phone-preview">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="app-logo">
                      <div className="logo-circle"></div>
                      <div className="logo-text">MIMO</div>
                    </div>
                  </div>
                  
                  <div className="app-content">
                    <div className="crypto-icons">
                      <div className="crypto-icon crypto-icon--eth"></div>
                      <div className="crypto-icon crypto-icon--btc"></div>
                      <div className="crypto-icon crypto-icon--usdt"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 