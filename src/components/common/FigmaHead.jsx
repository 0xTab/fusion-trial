import React from 'react';
import './FigmaHead.css';

const FigmaHead = () => {
  return (
    <section className="figma-head">
      <div className="head-container">
        <div className="head-content">
          <h2 className="head-title">Free NFT Avatar</h2>
          <p className="head-description">
            Get your own unique NFT avatar to represent your Web3.0 identity in the MIMO community.
          </p>
          
          <div className="head-phone">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e924d821e8a81e6dd8cc96052cca6f93c863c817?width=1806" 
              alt="Free NFT Avatar Interface" 
              className="head-phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaHead;
