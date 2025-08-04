import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { ANIMATIONS } from '../../constants/designTokens';
import '../../styles/components/DevicePreview.css';

const DevicePreview = () => {
  const { isMobile } = useResponsive();

  const deviceImages = {
    laptop: {
      device: "https://api.builder.io/api/v1/image/assets/TEMP/62fec72bacac0fa9f3a49e6142081cec7680b49a?width=950",
      screen: "https://api.builder.io/api/v1/image/assets/TEMP/3b9d81118667ffb3d0e5176ad5cda92591dbdaf0?width=776",
      alt: "MacBook Air showing MIMO interface"
    },
    mobile: {
      device: "https://api.builder.io/api/v1/image/assets/TEMP/bbbdc343eb442c897c8bf5e57bde963d8aff41e8?width=254",
      appIcon: "https://api.builder.io/api/v1/image/assets/TEMP/a41c3a050719362ff2c4b37e5940c6596049d8f0?width=75",
      alt: "Mobile device showing MIMO app"
    }
  };

  const handleImageError = (imageType) => {
    console.error(`Failed to load ${imageType} image`);
  };

  const renderLaptopPreview = () => (
    <div className="laptop-container">
      <img 
        src={deviceImages.laptop.device}
        alt={deviceImages.laptop.alt}
        className="laptop-image"
        onError={() => handleImageError('laptop device')}
      />
      <div className="laptop-screen">
        <img 
          src={deviceImages.laptop.screen}
          alt="MIMO app interface on laptop"
          className="screen-content"
          onError={() => handleImageError('laptop screen')}
        />
      </div>
    </div>
  );

  const renderMobilePreview = () => (
    <div className="mobile-container">
      <img 
        src={deviceImages.mobile.device}
        alt={deviceImages.mobile.alt}
        className="mobile-device"
        onError={() => handleImageError('mobile device')}
      />
      <img 
        src={deviceImages.mobile.appIcon}
        alt="MIMO app icon on mobile"
        className="mobile-app-icon"
        onError={() => handleImageError('mobile app icon')}
      />
    </div>
  );

  return (
    <section 
      className="device-preview"
      style={{ animation: isMobile ? ANIMATIONS.FADE_IN_UP : ANIMATIONS.SLIDE_IN_RIGHT }}
    >
      <div className="device-container">
        {renderLaptopPreview()}
        {renderMobilePreview()}
      </div>
    </section>
  );
};

export default DevicePreview;
