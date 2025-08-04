import React from 'react';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import PlatformButtons from '../components/Home/PlatformButtons';
import DevicePreview from '../components/Home/DevicePreview';
import Footer from '../components/Home/Footer';
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
