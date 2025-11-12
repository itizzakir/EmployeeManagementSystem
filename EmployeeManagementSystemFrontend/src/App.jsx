// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesEfficiency from './components/FeaturesEfficiency';
import TestimonialTicketSwap from './components/TestimonialTicketSwap';
import SecureHRIS from './components/SecureHRIS';
import ClunkyTools from './components/ClunkyTools';
import LeapsomeAIHeavyLifting from './components/LeapsomeAIHeavyLifting';
import LeapAIEmpowers from './components/LeapAIEmpowers';
import SeamlesslyConnected from './components/SeamlesslyConnected';
import TestimonialNeurosLab from './components/TestimonialNeurosLab';
import PeopleFirstSoftware from './components/PeopleFirstSoftware';
import Footer from './components/Footer';
import SuccessLooksLike from './components/SuccessLooksLike';
import EmpowerTeamsHero from './components/EmpowerTeamsHero';
import ProgressStartsWithPeople from './components/ProgressStartsWithPeople';

// Note: Import images from assets (assuming renamed sequentially based on attachments)
// import heroImage from './assets/hero-image.png'; // From attachment 1 (adapt for office/HR collaboration)
// import featuresImage1 from './assets/features-image1.png'; // Attachment 2 left
// ... similarly for others. For demo, using placeholders. In real setup, replace with actual images.
// For professional HR images, use placeholders like Unsplash: e.g., src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesEfficiency />
        <TestimonialTicketSwap />
        <SecureHRIS />
        <ClunkyTools />
        <LeapsomeAIHeavyLifting />
        <LeapAIEmpowers />
        <SeamlesslyConnected />
        <TestimonialNeurosLab />
        <PeopleFirstSoftware />
        <SuccessLooksLike />
        <EmpowerTeamsHero />
        <ProgressStartsWithPeople />
      </main>
      <Footer currentYear={currentYear} />
    </div>
  );
};

export default App;