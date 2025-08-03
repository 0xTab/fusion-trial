import React from 'react';

const DevicePreview = () => {
  return (
    <section className="device-preview">
      <div className="device-container">
        <div className="laptop-container">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/62fec72bacac0fa9f3a49e6142081cec7680b49a?width=950"
            alt="MacBook Air showing MIMO interface"
            className="laptop-image"
          />
          <div className="laptop-screen">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3b9d81118667ffb3d0e5176ad5cda92591dbdaf0?width=776"
              alt="MIMO app interface on laptop"
              className="screen-content"
            />
          </div>
        </div>
        
        <div className="mobile-container">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/bbbdc343eb442c897c8bf5e57bde963d8aff41e8?width=254"
            alt="Mobile device showing MIMO app"
            className="mobile-device"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a41c3a050719362ff2c4b37e5940c6596049d8f0?width=75"
            alt="MIMO app icon on mobile"
            className="mobile-app-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default DevicePreview;
