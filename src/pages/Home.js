import React from 'react';
import Header from '../components/home/Header';
import WalletSection from '../components/home/WalletSection';
import ProfileSection from '../components/home/ProfileSection';
import NewsSection from '../components/home/NewsSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';
import './Home.css';
import MainSection from '../components/home/MainSection';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainSection />
      <WalletSection />
      <ProfileSection />
      <NewsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
