import React from 'react';
import Header from '../components/builderhome/Header';
import HeroSection from '../components/builderhome/HeroSection';
import Web3Community from '../components/builderhome/Web3Community';
import Web3Wallet from '../components/builderhome/Web3Wallet';
import Web3Profile from '../components/builderhome/Web3Profile';
import NewsAndUpdates from '../components/builderhome/NewsAndUpdates';
import FreeNFTAvatar from '../components/builderhome/FreeNFTAvatar';
import AboutUs from '../components/builderhome/AboutUs';
import ContactUs from '../components/builderhome/ContactUs';
import Footer from '../components/builderhome/Footer';
import '../styles/builderhome/BuilderHome.css';

const BuilderHome = () => {
  return (
    <div className="builder-home">
      <Header />
      <HeroSection />
      <Web3Community />
      <Web3Wallet />
      <Web3Profile />
      <NewsAndUpdates />
      <FreeNFTAvatar />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default BuilderHome;
