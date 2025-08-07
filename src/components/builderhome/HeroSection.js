import React from 'react';
import FigmaButton from '../common/FigmaButton';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <svg className="hero-looper" viewBox="0 0 751 1955" fill="none">
          <g opacity="0.6">
            <path opacity="0.0526316" d="M275.275 1565.76C337.885 1592.37 496.533 1605.73 630.243 1446.31C797.381 1247.04 761.352 995.925 889.096 781.025C983.38 622.412 1290.22 288.702 1580.42 293.478" stroke="white" strokeOpacity="0.2" strokeWidth="3"/>
            <path opacity="0.105263" d="M183.294 1487.26C242.78 1520.27 399.162 1550.14 548.804 1405.57C735.856 1224.86 726.273 971.357 875.78 770.987C986.128 623.098 1326.17 323.29 1614.28 358.374" stroke="white" strokeOpacity="0.2" strokeWidth="3"/>
            <path opacity="0.157895" d="M99.0799 1402.5C154.79 1441.54 307.193 1487.59 471.126 1359.46C676.043 1199.29 693.011 946.177 862.643 762.532C987.845 626.988 1357.37 364.367 1640.23 429.374" stroke="white" strokeOpacity="0.2" strokeWidth="3"/>
          </g>
        </svg>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="mimo-title">MIMO</span>
          <span className="platform-text">Social Platform</span>
          <span className="web3-text">for Web3.0.</span>
        </h1>
        
        <p className="hero-description">
          An instant messaging social platform for Web3.0.
        </p>
        
        <FigmaButton 
          className="hero-cta-button"
          size="large"
        >
          Get Early Access
        </FigmaButton>
      </div>
    </section>
  );
};

export default HeroSection;
