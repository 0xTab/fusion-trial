import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About us</h2>
          <p className="about-description">
            Mimo is a Web3.0 chat app which lets users connect to different Web3 groups. As a communication platform, Mimo helps people get information and build genuine relationships with their friends and communities in Web3.
          </p>
        </div>
        
        <div className="about-visual">
          <div className="about-image">
            <img src="../../assets/images/about-us-image.png" alt="About MIMO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
