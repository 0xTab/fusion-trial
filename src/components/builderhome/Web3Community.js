import React from 'react';

const Web3Community = () => {
  return (
    <section className="web3-community">
      <div className="community-container">
        <div className="community-content">
          <h2 className="community-title">
            Web3.0<br />
            Community
          </h2>
          
          <div className="community-phone">
            <div className="phone-frame">
              <div className="phone-content">
                <div className="chat-interface">
                  <div className="chat-header">
                    <div className="user-avatar">
                      <div className="avatar-circle"></div>
                    </div>
                    <div className="chat-bubbles">
                      <div className="chat-bubble">
                        <div className="dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="club-label">Club</div>
              </div>
            </div>
          </div>
          
          <div className="community-indicators">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Community;
