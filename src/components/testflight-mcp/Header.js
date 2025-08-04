import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING } from '../../constants/designTokens';
import SocialIcons from './SocialIcons';
import LanguageSelector from './LanguageSelector';
import Navigation from './Navigation';
import DownloadButton from './DownloadButton';
import Logo from './Logo';

const Header = () => {
  return (
    <header 
      className="testmcp-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: `${SPACING.PADDING_MD} ${SPACING.PADDING_XL}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(9, 10, 17, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        minHeight: '80px',
      }}
    >
      {/* Logo */}
      <Logo />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Right Section */}
      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: SPACING.GAP_LG }}>
        {/* Social Icons */}
        <SocialIcons />
        
        {/* Language Selector */}
        <LanguageSelector />
        
        {/* Download Button */}
        <DownloadButton />
      </div>
    </header>
  );
};

export default Header; 