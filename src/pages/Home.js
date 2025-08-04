import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import Footer from '../components/Footer';
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
