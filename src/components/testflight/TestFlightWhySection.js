import React from 'react';
import '../../styles/testflight/TestFlightWhySection.css';

const TestFlightWhySection = () => {
  return (
    <section className="why-testflight-section">
      <div className="why-container">
        <h2 className="why-title">Why via Testflight?</h2>
        
        <div className="benefits-list">
          <div className="benefit-item">
            <div className="bullet-point"></div>
            <p className="benefit-text">
              Experience the latest features before the official IOS version!
            </p>
          </div>
          
          <div className="benefit-item">
            <div className="bullet-point"></div>
            <p className="benefit-text">
              Chances of joining the MIMO internal test plan to obtain the latest News of Airdrop events!
            </p>
          </div>
        </div>
        
        <p className="contact-text">
          If you have any questions, please contact us, we are happy to help!
        </p>
      </div>
    </section>
  );
};

export default TestFlightWhySection;
