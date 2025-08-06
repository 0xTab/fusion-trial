import React from 'react';
import './FigmaButton.css';

const FigmaButton = ({ 
  variant = 'primary', 
  withIcon = false, 
  onClick, 
  className = '',
  children = 'Get Early Access',
  size = 'medium',
  disabled = false
}) => {
  const buttonClass = `figma-button figma-button--${variant} figma-button--${size} ${className}`.trim();
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      disabled={disabled}
    >
      {withIcon && (
        <svg className="figma-button__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0L12.2451 7.75492L20 10L12.2451 12.2451L10 20L7.75492 12.2451L0 10L7.75492 7.75492L10 0Z" fill="currentColor"/>
        </svg>
      )}
      <span className="figma-button__text">{children}</span>
    </button>
  );
};

export default FigmaButton; 