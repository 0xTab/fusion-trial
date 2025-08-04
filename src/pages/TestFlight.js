import React from 'react';
import TestFlightHeader from '../components/testflight/TestFlightHeader';
import TestFlightHeroSection from '../components/testflight/TestFlightHeroSection';
import TestFlightPhonePreview from '../components/testflight/TestFlightPhonePreview';
import TestFlightWhySection from '../components/testflight/TestFlightWhySection';
import TestFlightContactForm from '../components/testflight/TestFlightContactForm';
import TestFlightFooter from '../components/testflight/TestFlightFooter';
import '../styles/testflight/TestFlight.css';

const TestFlight = () => {
  return (
    <div className="testflight-page">
      <TestFlightHeader />
      <main className="testflight-main">
        <TestFlightHeroSection />
        <TestFlightPhonePreview />
        <TestFlightWhySection />
        <TestFlightContactForm />
      </main>
      <TestFlightFooter />
    </div>
  );
};

export default TestFlight;
