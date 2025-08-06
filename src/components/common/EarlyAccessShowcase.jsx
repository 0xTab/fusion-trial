import React from 'react';
import EarlyAccessButton from './EarlyAccessButton';
import './EarlyAccessShowcase.css';

const EarlyAccessShowcase = () => {
  const handleButtonClick = (variant) => {
    console.log(`${variant} button clicked!`);
  };

  return (
    <div className="early-access-showcase">
      <div className="early-access-showcase__container">
        <h2 className="early-access-showcase__title">Early Access Button Variations</h2>
        
        <div className="early-access-showcase__buttons">
          <div className="early-access-showcase__button-wrapper">
            <EarlyAccessButton 
              variant="cyan"
              onClick={() => handleButtonClick('cyan')}
            />
          </div>
          
          <div className="early-access-showcase__button-wrapper">
            <EarlyAccessButton 
              variant="red"
              onClick={() => handleButtonClick('red')}
            />
          </div>
          
          <div className="early-access-showcase__button-wrapper">
            <EarlyAccessButton 
              variant="blue"
              onClick={() => handleButtonClick('blue')}
            />
          </div>
          
          <div className="early-access-showcase__button-wrapper">
            <EarlyAccessButton 
              variant="red"
              withIcon={true}
              onClick={() => handleButtonClick('red with icon')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessShowcase;
