import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/designTokens';
import './EarlyAccessButton.css';

const EarlyAccessButton = ({ variant = 'primary', withIcon = false, onClick, className = '' }) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'cyan':
        return 'early-access-btn--cyan';
      case 'red':
        return 'early-access-btn--red';
      case 'blue':
        return 'early-access-btn--blue';
      default:
        return 'early-access-btn--primary';
    }
  };

  return (
    <button 
      className={`early-access-btn ${getGradientClass()} ${className}`}
      onClick={onClick}
    >
      {withIcon && (
        <svg 
          className="early-access-btn__icon" 
          width="30" 
          height="30" 
          viewBox="0 0 30 30" 
          fill="none"
        >
          <path 
            d="M15 2L18.09 8.26L25 9L20 13.74L21.18 20.5L15 17L8.82 20.5L10 13.74L5 9L11.91 8.26L15 2Z" 
            fill="currentColor"
          />
        </svg>
      )}
      <span className="early-access-btn__text">Get Early Access</span>
    </button>
  );
};

export default EarlyAccessButton;
