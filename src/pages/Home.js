import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Web3WalletSection from '../components/home/Web3WalletSection';
import NewsSection from '../components/home/NewsSection';
import CommunitySection from '../components/home/CommunitySection';
import AboutUsSection from '../components/home/AboutUsSection';
import ContactUsSection from '../components/home/ContactUsSection';
import Footer from '../components/home/Footer';
import Web3ProfileSection from '../components/home/Web3ProfileSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Web3WalletSection />
      <Web3ProfileSection />
      <NewsSection />
      <CommunitySection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home;
