
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ActionPlanSection from '@/components/ActionPlanSection';
import FeaturesSection from '@/components/FeaturesSection';
import ResultsSection from '@/components/ResultsSection';
import JoinSection from '@/components/JoinSection';
import InspirationSection from '@/components/InspirationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ValuePropositionSection />
      <ActionPlanSection />
      <FeaturesSection />
      <ResultsSection />
      <JoinSection />
      <InspirationSection />
      <Footer />
    </div>
  );
};

export default Index;
