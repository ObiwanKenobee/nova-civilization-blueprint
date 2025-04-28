
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0032] via-[#190061] to-[#240090] star-bg -z-10"></div>
      
      {/* Animated Orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3500d3]/20 blur-3xl animate-pulse-slow -z-5"></div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight animate-float">
          <span className="block">PAX NOVA</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
          The Peaceful New Civilization Initiative
        </p>
        
        <h2 className="text-lg md:text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
          A unified planetary future built on justice, innovation, wisdom, and divine love.
        </h2>
        
        <Button size="lg" className="group">
          <span>Join the Movement</span>
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">➔</span>
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
