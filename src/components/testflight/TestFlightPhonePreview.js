import React from 'react';
import '../../styles/testflight/TestFlightPhonePreview.css';

const TestFlightPhonePreview = () => {
  return (
    <section className="phone-preview-section">
      <div className="preview-container">
        <div className="phone-mockups">
          <div className="phone-mockup phone-left">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9a8d687e13508895b9936e6a96146c9f60ec7587?width=589" 
              alt="TestFlight App Store Screenshot" 
              className="phone-image"
            />
          </div>
          
          <div className="arrow-indicator">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 0C12.56 0 0 12.56 0 28C0 43.44 12.56 56 28 56C43.44 56 56 43.44 56 28C56 12.56 43.44 0 28 0ZM37.36 29.498L27.3441 39.4039C26.9541 39.788 26.446 39.9819 25.938 39.9819C25.4221 39.9819 24.906 39.7839 24.5161 39.3879C23.74 38.6019 23.7461 37.3379 24.5321 36.5599L33.1201 28.0659L24.6021 19.5239C23.8221 18.7419 23.8241 17.4759 24.606 16.6959C25.3881 15.9139 26.6541 15.918 27.4341 16.6999L37.3661 26.6599C37.3681 26.6619 37.3681 26.6638 37.37 26.6659C37.372 26.6679 37.374 26.6679 37.3761 26.6699C37.56 26.8559 37.692 27.0718 37.788 27.2978C37.792 27.3058 37.802 27.3139 37.8041 27.3218C38.1 28.048 37.952 28.912 37.36 29.498Z" fill="#42EBAE"/>
            </svg>
          </div>
          
          <div className="phone-mockup phone-right">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/42cf4d65192bf3cf48e6a8ce1da48510d775ca9a?width=589" 
              alt="MIMO App Installation Screenshot" 
              className="phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFlightPhonePreview;
