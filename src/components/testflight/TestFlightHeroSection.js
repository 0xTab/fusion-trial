import React from 'react';
import '../../styles/testflight/TestFlightHeroSection.css';

const TestFlightHeroSection = () => {
  return (
    <section className="testflight-hero">
      <div className="hero-background-elements">
        <div className="background-blur blur-1"></div>
        <div className="background-blur blur-2"></div>
        <div className="background-blur blur-3"></div>
        <div className="decorative-star star-1"></div>
        <div className="decorative-star star-2"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">How to install via Testflight</h1>
          <p className="hero-notice">Notice*: Only for iOS users</p>
          
          <div className="feature-highlight">
            <p className="highlight-text">
              Unlock the <span className="highlight-emphasis">latest features</span> of MIMO within <span className="highlight-emphasis">1 min</span>
            </p>
          </div>
          
          <div className="installation-steps">
            <div className="step-content">
              <p className="step-text">
                Step 1: Install <a href="https://apps.apple.com/app/testflight/id899247664" target="_blank" rel="noopener noreferrer" className="testflight-link">Testflight app</a> on your iPhone/iPad.
              </p>
              <p className="step-text">
                Step 2: Click our Testflight <a href="#" className="testflight-link">download link</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFlightHeroSection;
