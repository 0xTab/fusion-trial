import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">About us</h2>
            <p className="about-description">
              Mimo is a Web3.0 chat app which lets users connect to different Web3 groups. As a communication platform, Mimo helps people get information and build genuine relationships with their friends and communities in Web3.
            </p>
          </div>
          
          <div className="about-visual">
            <div className="about-image-container">
              <div className="about-image">
                <div className="about-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-background">
          <div className="about-bg-element about-bg-element--1"></div>
          <div className="about-bg-element about-bg-element--2"></div>
          <div className="about-bg-element about-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
