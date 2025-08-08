import React from 'react';
import FigmaHead from '../common/FigmaHead';
import '../../styles/home/Web3ProfileSection.css';

const Web3ProfileSection = () => {
  return (
    <section className="web3-profile-section">
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-header">
            <h2 className="profile-title">Web3.0 Profile</h2>
            <p className="profile-description">
              One-stop-shop Decentralized Identity (DID) solution that conveniently stores all of your Web3.0 information.
            </p>
          </div>
          
          <div className="profile-visual">
            <div className="profile-phone-mockup">
              <div className="profile-phone-screen">
                <div className="profile-app-interface">
                  <div className="profile-app-header">
                    <div className="profile-app-logo">
                      <div className="profile-logo-circle"></div>
                      <div className="profile-logo-text">Profile</div>
                    </div>
                  </div>
                  
                  <div className="profile-app-content">
                    <div className="profile-avatar">
                      <div className="avatar-circle">
                        <div className="avatar-image"></div>
                      </div>
                      <div className="avatar-info">
                        <div className="avatar-name">Web3 User</div>
                        <div className="avatar-id">0x1234...5678</div>
                      </div>
                    </div>
                    
                    <div className="profile-stats">
                      <div className="stat-item">
                        <div className="stat-label">NFTs</div>
                        <div className="stat-value">24</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-label">Tokens</div>
                        <div className="stat-value">12</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-label">Communities</div>
                        <div className="stat-value">8</div>
                      </div>
                    </div>
                    
                    <div className="profile-credentials">
                      <div className="credential-item">
                        <div className="credential-icon credential-icon--verified"></div>
                        <div className="credential-info">
                          <div className="credential-name">Verified Identity</div>
                          <div className="credential-status">Active</div>
                        </div>
                      </div>
                      
                      <div className="credential-item">
                        <div className="credential-icon credential-icon--did"></div>
                        <div className="credential-info">
                          <div className="credential-name">DID Connected</div>
                          <div className="credential-status">Linked</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-background">
          <div className="profile-bg-element profile-bg-element--1"></div>
          <div className="profile-bg-element profile-bg-element--2"></div>
          <div className="profile-bg-element profile-bg-element--3"></div>
        </div>
      </div>
    </section>
  );
};

export default Web3ProfileSection;
