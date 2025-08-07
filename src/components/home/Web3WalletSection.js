import React from 'react';
import FigmaHead from '../common/FigmaHead';
import './Web3WalletSection.css';

const Web3WalletSection = () => {
  return (
    <section className="web3-wallet-section">
      <div className="wallet-container">
        <div className="wallet-content">
          <div className="wallet-header">
            <h2 className="wallet-title">Web3.0 Wallet</h2>
            <p className="wallet-description">
              Mimo offers a cryptocurrency wallet that enables you to safely manage assets on the multiple blockchain networks.
            </p>
          </div>
          
          <div className="wallet-visual">
            <div className="wallet-phone-mockup">
              <div className="wallet-phone-screen">
                <div className="wallet-app-interface">
                  <div className="wallet-app-header">
                    <div className="wallet-app-logo">
                      <div className="wallet-logo-circle"></div>
                      <div className="wallet-logo-text">Wallet</div>
                    </div>
                  </div>
                  
                  <div className="wallet-app-content">
                    <div className="wallet-balance">
                      <div className="balance-label">Total Balance</div>
                      <div className="balance-amount">$2,847.32</div>
                      <div className="balance-change positive">+12.5%</div>
                    </div>
                    
                    <div className="wallet-assets">
                      <div className="asset-item">
                        <div className="asset-icon asset-icon--eth"></div>
                        <div className="asset-info">
                          <div className="asset-name">Ethereum</div>
                          <div className="asset-balance">1.245 ETH</div>
                        </div>
                        <div className="asset-value">$1,847.32</div>
                      </div>
                      
                      <div className="asset-item">
                        <div className="asset-icon asset-icon--btc"></div>
                        <div className="asset-info">
                          <div className="asset-name">Bitcoin</div>
                          <div className="asset-balance">0.023 BTC</div>
                        </div>
                        <div className="asset-value">$1,000.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wallet-background">
          <div className="wallet-bg-element wallet-bg-element--1"></div>
          <div className="wallet-bg-element wallet-bg-element--2"></div>
          <div className="wallet-bg-element wallet-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default Web3WalletSection;
