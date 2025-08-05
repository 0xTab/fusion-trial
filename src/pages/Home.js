import React from 'react';
import Header from '../components/common/Header';
import FeaturesSection from '../components/home/FeaturesSection';
import AppShowcase from '../components/home/AppShowcase';
import Footer from '../components/common/Footer';
import '../styles/Home.css';
import { BuilderComponent } from '@builder.io/react';
import  '../builder-registry';

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
