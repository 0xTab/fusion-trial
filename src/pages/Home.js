import Header from '../components/common/Header';
import FeaturesSection from '../components/home/FeaturesSection';
import AppShowcase from '../components/home/AppShowcase';
import Footer from '../components/home/Footer';
import HeroSection from '../components/testflight-mcp/HeroSection';

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
