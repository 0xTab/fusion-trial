import React from 'react';
import Header from '../components/common/Header';
import FigmaButton from '../components/common/FigmaButton';
import '../styles/TestCom.css';

const TestCom = () => {
  return (
    <div className="testcom-page">
      <Header />
      <main className="testcom-main">
        <div className="hero-container">
          <div className="mimo-logo">
            <svg className="mimo-icon" viewBox="0 0 60 60" fill="none">
              <rect width="60" height="60" rx="30" fill="#00E5A0"/>
              <path d="M15 20H25V40H15V20Z" fill="white"/>
              <path d="M30 20H40V40H30V20Z" fill="white"/>
              <circle cx="20" cy="45" r="8" fill="#00E5A0"/>
            </svg>
          </div>
          
          <h1 className="hero-title">
            <span className="mimo-text">MIMO</span>
            <span className="subtitle">for Web3.0.</span>
          </h1>
          
          <div className="cta-section">
            <FigmaButton 
              variant="primary"
              size="large"
              className="get-early-access-btn"
              withIcon={true}
            >
              Get Early Access
            </FigmaButton>
            
            <div className="sparkle-icon top-sparkle">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M10 0L12.2451 7.75492L20 10L12.2451 12.2451L10 20L7.75492 12.2451L0 10L7.75492 7.75492L10 0Z" fill="#00E5A0"/>
              </svg>
            </div>
          </div>
          
          <div className="visualization-container">
            <div className="sparkle-icon bottom-sparkle">
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M10 0L12.2451 7.75492L20 10L12.2451 12.2451L10 20L7.75492 12.2451L0 10L7.75492 7.75492L10 0Z" fill="#00E5A0"/>
              </svg>
            </div>
            
            <div className="avatars-container">
              <div className="avatar avatar-1">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar1?width=60" alt="User Avatar 1" />
              </div>
              <div className="avatar avatar-2">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar2?width=60" alt="User Avatar 2" />
              </div>
              <div className="avatar avatar-3">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar3?width=60" alt="User Avatar 3" />
              </div>
              <div className="avatar avatar-4">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar4?width=60" alt="User Avatar 4" />
              </div>
              <div className="avatar avatar-5">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar5?width=60" alt="User Avatar 5" />
              </div>
              <div className="avatar avatar-6">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/avatar6?width=60" alt="User Avatar 6" />
              </div>
            </div>
            
            <div className="central-sphere">
              <div className="sphere-background">
                <div className="grid-pattern"></div>
                <div className="orbit-lines"></div>
              </div>
              <div className="mimo-center-logo">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="#1A1A1A"/>
                  <rect x="15" y="20" width="10" height="20" fill="#00E5A0"/>
                  <rect x="35" y="20" width="10" height="20" fill="#00E5A0"/>
                  <circle cx="20" cy="45" r="5" fill="#00E5A0"/>
                </svg>
              </div>
            </div>
            
            <div className="device-mockup">
              <div className="phone-frame">
                <div className="phone-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestCom;
