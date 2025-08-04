import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../constants/designTokens';

const Logo = () => {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Logo Icon */}
      <div className="logo-icon" style={{ width: '37px', height: '44px' }}>
        <svg width="37" height="44" viewBox="0 0 37 44" fill="none">
          <rect width="29.09" height="29.42" fill="url(#logoGradient)"/>
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={COLORS.PRIMARY}/>
              <stop offset="100%" stopColor={COLORS.PRIMARY_LIGHT}/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="logo-text" style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="101" height="24" viewBox="0 0 101 24" fill="none">
          <path d="M0 0H20V24H0V0Z" fill={COLORS.TEXT_PRIMARY}/>
          <path d="M25 0H30V24H25V0Z" fill={COLORS.TEXT_PRIMARY}/>
          <path d="M35 0H60V24H35V0Z" fill={COLORS.TEXT_PRIMARY}/>
          <path d="M76 0H101V24H76V0Z" fill={COLORS.TEXT_PRIMARY}/>
        </svg>
      </div>
    </div>
  );
};

export default Logo; 