import React from 'react';
import Header from '../components/testflight-mcp/Header';
import HeroSection from '../components/testflight-mcp/HeroSection';
import DevicePreview from '../components/testflight-mcp/DevicePreview';
import ContactSection from '../components/testflight-mcp/ContactSection';
import Footer from '../components/testflight-mcp/Footer';
import BackgroundElements from '../components/testflight-mcp/BackgroundElements';
import { COLORS, TYPOGRAPHY, SPACING, LAYOUT } from '../constants/designTokens';
import '../styles/testmcp.css';

const TestMCP = () => {
  return (
    <div 
      className="testmcp-page"
      style={{ 
        backgroundColor: COLORS.BACKGROUND_DARK,
        color: COLORS.TEXT_PRIMARY,
        minHeight: '100vh',
        fontFamily: TYPOGRAPHY.FONT_PRIMARY,
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main 
        className="testmcp-content"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          paddingTop: LAYOUT.HEADER_HEIGHT,
        }}
      >
        {/* Hero Section */}
        <HeroSection />
        
        {/* Device Preview */}
        <DevicePreview />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TestMCP;
