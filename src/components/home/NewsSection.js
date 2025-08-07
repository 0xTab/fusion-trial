import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-content">
          <h2 className="news-title">News and Updates</h2>
          <p className="news-description">
            Mimo offers a secure and beginner-friendly solution to help you get latest Web3 news and updates easily.
          </p>
        </div>
        
        <div className="news-visual">
          <div className="news-mockup">
            <img src="../../assets/images/news-image.png" alt="MIMO News App" />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="news-background">
        <div className="bg-gradient"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
