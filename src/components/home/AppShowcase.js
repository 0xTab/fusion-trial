import React from 'react';
import '../../styles/home/AppShowcase.css';

const AppShowcase = () => {
  const apps = [
    {
      id: 1,
      title: 'Web3.0 Wallet',
      description: 'Mimo offers a cryptocurrency wallet that enables you to safely manage assets on the multiple blockchain networks.',
      image: '/src/assets/images/wallet-app.png',
      type: 'wallet'
    },
    {
      id: 2,
      title: 'Web3.0 Community',
      description: 'Mimo offers a secure and beginner-friendly solution to help you quickly get the latest Web3 news and updates.',
      image: '/src/assets/images/club-app.png',
      type: 'community'
    },
    {
      id: 3,
      title: 'Web3.0 Profile',
      description: 'One-stop-shop Decentralized Identity (DID) solution that conveniently stores all of your Web3.0 information.',
      image: '/src/assets/images/discover-app.png',
      type: 'profile'
    },
    {
      id: 4,
      title: 'Free NFT Avatar',
      description: 'Join us now to get a free NFT avatar instantly.',
      image: '/src/assets/images/send-chat-app.png',
      type: 'avatar'
    }
  ];

  return (
    <section className="app-showcase">
      <div className="showcase-container">
        {apps.map((app, index) => (
          <div key={app.id} className={`app-item ${app.type} ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="app-content">
              <div className="app-text">
                <h2 className="app-title">{app.title}</h2>
                <p className="app-description">{app.description}</p>
              </div>
              <div className="app-visual">
                <div className="app-image-container">
                  <img src={app.image} alt={app.title} className="app-image" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase; 