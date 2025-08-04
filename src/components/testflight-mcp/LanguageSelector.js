import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../constants/designTokens';

const LanguageSelector = () => {
  return (
    <div className="language-selector" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ 
        color: COLORS.TEXT_PRIMARY, 
        fontSize: TYPOGRAPHY.SIZE_SM,
        fontWeight: TYPOGRAPHY.WEIGHT_SEMIBOLD 
      }}>
        LANGUAGE
      </span>
      <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
        <path d="M1 3L4 6L7 3" stroke={COLORS.TEXT_PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default LanguageSelector; 