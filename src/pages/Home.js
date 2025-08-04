import React from 'react';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import PlatformButtons from '../components/Home/PlatformButtons';
import DevicePreview from '../components/Home/DevicePreview';
import Footer from '../components/Home/Footer';
import { COLORS, BLUR, ANIMATIONS } from '../constants/designTokens';
import '../styles/Home.css';

const Home = () => {
  const renderBackgroundEffects = () => (
    <div className="background-effects">
      <div 
        className="blur-effect blur-1"
        style={{ 
          background: BLUR.TEAL,
          width: '485px',
          height: '469px',
          top: '60%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      <div 
        className="blur-effect blur-2"
        style={{ 
          background: BLUR.GREEN,
          width: '454px',
          height: '443px',
          top: '-20%',
          right: '10%'
        }}
      />
      <div 
        className="blur-effect blur-3"
        style={{ 
          background: BLUR.GREEN,
          width: '454px',
          height: '443px',
          bottom: '-20%',
          left: '-10%'
        }}
      />
      <div 
        className="gradient-overlay"
        style={{
          background: 'linear-gradient(90deg, #31DAF1 0%, rgba(217, 217, 217, 0.06) 100%)',
          opacity: 0.06,
          filter: 'blur(100px)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '354px'
        }}
      />
    </div>
  );

  const renderMainContent = () => (
    <div className="home-content">
      <Header />
      <HeroSection />
      <PlatformButtons />
      <DevicePreview />
      <Footer />
    </div>
  );

  return (
    <div 
      className="home-page"
      style={{ 
        backgroundColor: COLORS.PRIMARY.BG,
        color: COLORS.PRIMARY.TEXT,
        animation: ANIMATIONS.FADE_IN_UP
      }}
    >
      {renderBackgroundEffects()}
      {renderMainContent()}
    </div>
  );
};

export default Home;
