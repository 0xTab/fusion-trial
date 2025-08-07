import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About us</h2>
          <p className="about-description">
            Mimo is a Web3.0 chat app which lets users connect to different Web3 groups. As a communication platform, Mimo helps people get information and build genuine relationships with their friends and communities in Web3.
          </p>
          
          <div className="about-image">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fb8463bed07ff15803f14cde6a577511c5c5efa0?width=1254" 
              alt="About us illustration" 
              className="about-illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
