// src/App.jsx
import React from 'react';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Section Components
import Hero from './components/sections/Hero';
import KeyFeatures from './components/sections/KeyFeatures';
import CoreHRIS from './components/sections/CoreHRIS';
import EmpowerAI from './components/sections/EmpowerAI';
import Integrations from './components/sections/Integrations';import SuccessMetrics from './components/sections/SuccessMetrics';
import SocialProof from './components/sections/SocialProof';
import FinalCTA from './components/sections/FinalCTA';

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <CoreHRIS />
        <EmpowerAI />
        <SuccessMetrics />
        <SocialProof />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer currentYear={currentYear} />
    </div>
  );
};

export default App;