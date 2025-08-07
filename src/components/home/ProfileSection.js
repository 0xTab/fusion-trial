import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-content">
          <h2 className="profile-title">Web3.0 Profile</h2>
          <p className="profile-description">
            One-stop-shop Decentralized Identity (DID) solution that conveniently stores all of your Web3.0 information.
          </p>
        </div>
        
        <div className="profile-visual">
          <div className="profile-mockup">
            <img src="../../assets/images/discover-app.png" alt="MIMO Profile App" />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="profile-background">
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

export default ProfileSection;
