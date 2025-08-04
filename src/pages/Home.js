import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import AppShowcase from '../components/home/AppShowcase';
import Footer from '../components/home/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
