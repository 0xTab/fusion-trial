import React from 'react';
import FigmaButton from '../common/FigmaButton.jsx';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="background-gradient gradient-1"></div>
        <div className="background-gradient gradient-2"></div>
        <div className="background-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-main">MIMO</span>
            <span className="title-subtitle">Social Platform</span>
            <span className="title-subtitle gradient-text">for Web3.0.</span>
          </h1>
          
          <p className="hero-description">
            An instant messaging social platform for Web3.0.
          </p>
          
          <div className="hero-button">
            <FigmaButton 
              variant="primary"
              size="large"
              onClick={() => console.log('Get Early Access clicked')}
            >
              Get Early Access
            </FigmaButton>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="phone-frame">
            <img src="../../assets/images/hero-image.png" alt="MIMO App Preview" />
          </div>
        </div>
      </div>
      
      {/* Looper Animation */}
      <div className="looper-animation">
        {/* Multiple SVG elements for animation */}
      </div>
    </section>
  );
};

export default MainSection; 