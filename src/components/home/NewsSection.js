import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-content">
          <div className="news-header">
            <h2 className="news-title">News and Updates</h2>
            <p className="news-description">
              Mimo offers a secure and beginner-friendly solution to help you get latest Web3 news and updates easily.
            </p>
          </div>
          
          <div className="news-visual">
            <div className="news-phone-mockup">
              <div className="news-phone-screen">
                <div className="news-app-interface">
                  <div className="news-app-header">
                    <div className="news-app-logo">
                      <div className="news-logo-circle"></div>
                      <div className="news-logo-text">News</div>
                    </div>
                  </div>
                  
                  <div className="news-app-content">
                    <div className="news-feed">
                      <div className="news-item">
                        <div className="news-item-image"></div>
                        <div className="news-item-content">
                          <div className="news-item-category">DeFi</div>
                          <div className="news-item-title">New DeFi Protocol Launches</div>
                          <div className="news-item-excerpt">
                            Revolutionary DeFi protocol introduces innovative yield farming strategies...
                          </div>
                          <div className="news-item-meta">
                            <span className="news-item-time">2 hours ago</span>
                            <span className="news-item-source">CryptoNews</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="news-item">
                        <div className="news-item-image"></div>
                        <div className="news-item-content">
                          <div className="news-item-category">NFT</div>
                          <div className="news-item-title">Major NFT Collection Drop</div>
                          <div className="news-item-excerpt">
                            Popular artist announces exclusive NFT collection with unique utilities...
                          </div>
                          <div className="news-item-meta">
                            <span className="news-item-time">5 hours ago</span>
                            <span className="news-item-source">NFTDaily</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="news-item">
                        <div className="news-item-image"></div>
                        <div className="news-item-content">
                          <div className="news-item-category">Blockchain</div>
                          <div className="news-item-title">Layer 2 Solutions Gain Traction</div>
                          <div className="news-item-excerpt">
                            Ethereum scaling solutions see increased adoption and development...
                          </div>
                          <div className="news-item-meta">
                            <span className="news-item-time">1 day ago</span>
                            <span className="news-item-source">BlockchainNews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="news-background">
          <div className="news-bg-element news-bg-element--1"></div>
          <div className="news-bg-element news-bg-element--2"></div>
          <div className="news-bg-element news-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
