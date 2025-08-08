import React from 'react';
import '../../styles/home/CommunitySection.css';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-content">
          <div className="community-header">
            <h2 className="community-title">Web3.0 Community</h2>
            <p className="community-description">
              Connect with like-minded individuals and join vibrant communities in the Web3 ecosystem.
            </p>
          </div>
          
          <div className="community-visual">
            <div className="community-phone-mockup">
              <div className="community-phone-screen">
                <div className="community-app-interface">
                  <div className="community-app-header">
                    <div className="community-app-logo">
                      <div className="community-logo-circle"></div>
                      <div className="community-logo-text">Community</div>
                    </div>
                  </div>
                  
                  <div className="community-app-content">
                    <div className="community-search">
                      <div className="search-bar">
                        <div className="search-icon"></div>
                        <input type="text" placeholder="Search communities..." className="search-input" />
                      </div>
                    </div>
                    
                    <div className="community-list">
                      <div className="community-item">
                        <div className="community-item-avatar"></div>
                        <div className="community-item-info">
                          <div className="community-item-name">DeFi Traders</div>
                          <div className="community-item-members">2.4k members</div>
                          <div className="community-item-description">Discuss latest DeFi protocols and trading strategies</div>
                        </div>
                        <div className="community-item-status joined">Joined</div>
                      </div>
                      
                      <div className="community-item">
                        <div className="community-item-avatar"></div>
                        <div className="community-item-info">
                          <div className="community-item-name">NFT Collectors</div>
                          <div className="community-item-members">1.8k members</div>
                          <div className="community-item-description">Share and discover amazing NFT collections</div>
                        </div>
                        <div className="community-item-status join">Join</div>
                      </div>
                      
                      <div className="community-item">
                        <div className="community-item-avatar"></div>
                        <div className="community-item-info">
                          <div className="community-item-name">Web3 Developers</div>
                          <div className="community-item-members">3.2k members</div>
                          <div className="community-item-description">Build the future of decentralized applications</div>
                        </div>
                        <div className="community-item-status joined">Joined</div>
                      </div>
                      
                      <div className="community-item">
                        <div className="community-item-avatar"></div>
                        <div className="community-item-info">
                          <div className="community-item-name">Crypto News</div>
                          <div className="community-item-members">5.1k members</div>
                          <div className="community-item-description">Stay updated with the latest crypto news</div>
                        </div>
                        <div className="community-item-status join">Join</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="community-background">
          <div className="community-bg-element community-bg-element--1"></div>
          <div className="community-bg-element community-bg-element--2"></div>
          <div className="community-bg-element community-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
