import React from 'react';

const Web3Profile = () => {
  return (
    <section className="web3-profile">
      <div className="profile-container">
        <div className="profile-content">
          <h2 className="profile-title">Web3.0 Profile</h2>
          <p className="profile-description">
            Showcase your digital identity and connect with the Web3 community through your personalized profile.
          </p>
          
          <div className="profile-phone">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f0cc003c878cf977631db2e738ccf11841a8bb79?width=1502" 
              alt="Web3.0 Profile Interface" 
              className="profile-phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Profile;
