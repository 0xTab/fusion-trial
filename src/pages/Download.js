import React from 'react';
import Header from '../components/download/Header';
import HeroSection from '../components/download/HeroSection';
import PlatformButtons from '../components/download/PlatformButtons';
import DevicePreview from '../components/download/DevicePreview';
import Footer from '../components/download/Footer';
import '../styles/Home.css';

const Download = () => {
  return (
    <div className="home-page">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="blur-effect blur-1"></div>
        <div className="blur-effect blur-2"></div>
        <div className="blur-effect blur-3"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Main Content */}
      <div className="home-content">
        <Header />
        <HeroSection />
        <PlatformButtons />
        <DevicePreview />
        <Footer />
      </div>
    </div>
  );
};

export default Download;
