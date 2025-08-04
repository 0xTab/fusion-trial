import React from 'react';
import { AppleIcon, AndroidIcon, GooglePlayIcon } from '../common/SvgIcons';
import { useResponsive } from '../../hooks/useResponsive';
import { GRADIENTS, TRANSITIONS } from '../../constants/designTokens';
import '../../styles/components/PlatformButtons.css';

const PlatformButtons = () => {
  // useResponsive hook available if needed

  const platformData = [
    {
      id: 'iphone',
      icon: AppleIcon,
      label: 'iPhone/iPad',
      iconProps: { width: 28, height: 35 }
    },
    {
      id: 'testflight',
      icon: AppleIcon,
      label: 'Testflight',
      iconProps: { width: 28, height: 35 }
    },
    {
      id: 'android',
      icon: AndroidIcon,
      label: 'MIMO Apk',
      iconProps: { width: 41, height: 41 }
    },
    {
      id: 'googleplay',
      icon: GooglePlayIcon,
      label: 'Google Play',
      iconProps: { width: 100, height: 100 },
      className: 'google-play'
    }
  ];

  const handlePlatformClick = (platformId) => {
    // Platform-specific download logic would go here
    console.log(`Platform clicked: ${platformId}`);
  };

  const renderPlatformButton = ({ id, icon: IconComponent, label, iconProps, className = '' }) => (
    <div 
      key={id}
      className={`platform-button ${className}`}
      onClick={() => handlePlatformClick(id)}
      style={{ 
        background: GRADIENTS.PLATFORM,
        transition: TRANSITIONS.FAST,
        cursor: 'pointer'
      }}
    >
      <div className="button-icon">
        <IconComponent {...iconProps} />
      </div>
      <span className="button-label">{label}</span>
    </div>
  );

  return (
    <section className="platform-buttons">
      <div className="buttons-container">
        {platformData.map(renderPlatformButton)}
      </div>
    </section>
  );
};

export default PlatformButtons;
