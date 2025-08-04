import React from 'react';
import { BackIcon } from '../common/SvgIcons';
import { useResponsive } from '../../hooks/useResponsive';
import { SPACING, FONTS } from '../../constants/designTokens';
import '../../styles/components/Header.css';

const Header = () => {
  const { isMobile } = useResponsive();

  const handleBackClick = () => {
    // Navigation logic would go here
    console.log('Back to home clicked');
  };

  const renderLogo = () => (
    <div className="logo">
      <svg width={isMobile ? 45 : 60} height={isMobile ? 45 : 60} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="30" fill="url(#logoGradient)"/>
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#5AEFA7'}}/>
            <stop offset="100%" style={{stopColor: '#42EBAE'}}/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const renderBackButton = () => (
    <a href="/home" className="back-to-home" onClick={handleBackClick}>
      <BackIcon 
        width={isMobile ? 24 : 30} 
        height={isMobile ? 24 : 30} 
        className="back-icon"
      />
      <span>Back to home</span>
    </a>
  );

  return (
    <header className="home-header">
      <div className="header-content">
        {renderBackButton()}
        {renderLogo()}
      </div>
    </header>
  );
};

export default Header;
