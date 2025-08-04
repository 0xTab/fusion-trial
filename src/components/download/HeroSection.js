import React from 'react';
import { DownloadIcon } from '../common/SvgIcons';
import { useResponsive } from '../../hooks/useResponsive';
import { GRADIENTS, SHADOWS, TRANSITIONS, ANIMATIONS } from '../../constants/designTokens';
import '../../styles/components/HeroSection.css';

const HeroSection = () => {
  const { isMobile, isTablet } = useResponsive();

  const handleDownloadClick = () => {
    // Download logic would go here
    console.log('Download button clicked');
  };

  const getTitleSize = () => {
    if (isMobile) return '20px';
    if (isTablet) return '24px';
    return '30px';
  };

  const getSubtitleSize = () => {
    if (isMobile) return '16px';
    if (isTablet) return '20px';
    return '25px';
  };

  const getButtonSize = () => {
    if (isMobile) return '16px';
    if (isTablet) return '18px';
    return '20px';
  };

  const renderTitle = () => (
    <div className="title-container">
      <h1 
        className="main-title"
        style={{ fontSize: getTitleSize() }}
      >
        MIMO - Web3.0 Social Platform
      </h1>
      <p 
        className="subtitle"
        style={{ fontSize: getSubtitleSize() }}
      >
        Creating a world without borders
      </p>
    </div>
  );

  const renderDownloadButton = () => (
    <button 
      className="download-btn"
      onClick={handleDownloadClick}
      style={{ 
        fontSize: getButtonSize(),
        background: GRADIENTS.BUTTON,
        boxShadow: SHADOWS.BUTTON,
        transition: TRANSITIONS.FAST,
      }}
    >
      <DownloadIcon className="download-icon" />
      <span>Download Now</span>
    </button>
  );

  return (
    <section className="hero-section">
      <div 
        className="hero-content"
        style={{ animation: ANIMATIONS.FADE_IN_UP }}
      >
        {renderTitle()}
        {renderDownloadButton()}
      </div>
    </section>
  );
};

export default HeroSection;
