
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ActionPlanSection from '@/components/ActionPlanSection';
import FeaturesSection from '@/components/FeaturesSection';
import ResultsSection from '@/components/ResultsSection';
import JoinSection from '@/components/JoinSection';
import InspirationSection from '@/components/InspirationSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PAX NOVA",
    "description": "The Peaceful New Civilization Initiative - A unified planetary future built on justice, innovation, wisdom, and divine love.",
    "url": "https://paxnova.org",
    "logo": "https://paxnova.org/logo.png",
    "sameAs": [
      "https://twitter.com/pax_nova",
      "https://www.linkedin.com/company/pax-nova",
      "https://www.instagram.com/paxnova_official"
    ]
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>PAX NOVA - The Peaceful New Civilization Initiative</title>
        <meta name="description" content="Join PAX NOVA - a unified planetary future built on justice, innovation, wisdom, and divine love. Discover the blueprint for a new ethical civilization." />
        <meta name="keywords" content="new civilization, ethical technology, global justice, spiritual awakening, environmental restoration, visionary leadership, unified humanity" />
        <link rel="canonical" href="https://paxnova.org" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
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
