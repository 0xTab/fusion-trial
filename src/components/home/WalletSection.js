import React from 'react';
import './WalletSection.css';

const WalletSection = () => {
  return (
    <section className="wallet-section">
      <div className="wallet-container">
        <div className="wallet-content">
          <h2 className="wallet-title">Web3.0 Wallet</h2>
          <p className="wallet-description">
            Mimo offers a cryptocurrency wallet that enables you to safely manage assets on the multiple blockchain networks.
          </p>
        </div>
        
        <div className="wallet-visual">
          <div className="wallet-mockup">
            <img src="../../assets/images/wallet-app.png" alt="MIMO Wallet App" />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="wallet-background">
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

export default WalletSection;
