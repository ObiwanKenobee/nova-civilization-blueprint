
import React, { useEffect, useRef } from 'react';

const InspirationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const scrollPercentage = 1 - (rect.top / window.innerHeight);
      
      if (scrollPercentage > 0 && scrollPercentage < 1) {
        const translateY = Math.min(scrollPercentage * 50, 30);
        section.style.backgroundPositionY = `${translateY}%`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-4 bg-cosmic-dark text-white relative bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(30, 20, 60, 0.8), rgba(10, 5, 30, 0.95)), url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
        transition: 'background-position-y 0.1s ease-out'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-cosmic-gold opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        
        <blockquote className="text-xl md:text-2xl italic font-light mb-10">
          "The future belongs to those who build it wisely, lovingly, and courageously."
        </blockquote>
        
        <p className="text-lg md:text-xl">
          Together, we can birth the world humanity was always destined to inherit.
        </p>
      </div>
    </section>
  );
};

export default InspirationSection;
