import React from 'react';

const FreeNFTAvatar = () => {
  return (
    <section className="free-nft-avatar">
      <div className="nft-container">
        <div className="nft-content">
          <h2 className="nft-title">Free NFT Avatar</h2>
          <p className="nft-description">
            Get your own unique NFT avatar to represent your Web3.0 identity in the MIMO community.
          </p>
          
          <div className="nft-phone">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e924d821e8a81e6dd8cc96052cca6f93c863c817?width=1806" 
              alt="Free NFT Avatar Interface" 
              className="nft-phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeNFTAvatar;
