
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ActionPlanSection from '@/components/ActionPlanSection';

const ActionPlan = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>8-Phase Transformation Plan | PAX NOVA</title>
        <meta name="description" content="Our comprehensive 8-Phase plan to transform global civilization through ethical technology, justice-centered governance, and spiritual awakening." />
        <meta name="keywords" content="transformation plan, ethical civilization, global change, civilization rebuilding, ethical systems" />
        <link rel="canonical" href="https://paxnova.org/action-plan" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">The 8-Phase Transformation Plan</h1>
        
        <p className="text-xl text-center mb-16">
          A structured approach to rebuild civilization on ethical foundations
        </p>
      </div>
      
      <ActionPlanSection />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Implementation Strategy</h2>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Each phase of our transformation plan is designed to build upon the previous, creating 
            a cascade of positive change that becomes self-reinforcing. We recognize that true 
            transformation must happen at multiple levels simultaneously:
          </p>
          
          <ul>
            <li><strong>Individual consciousness</strong> - Personal awakening and ethical development</li>
            <li><strong>Cultural systems</strong> - Shifting values, art, and shared narratives</li>
            <li><strong>Governance structures</strong> - Creating just, transparent, and wise leadership models</li>
            <li><strong>Economic models</strong> - Building systems that serve life, not extract from it</li>
            <li><strong>Technological development</strong> - Ensuring innovation enhances our humanity</li>
          </ul>
          
          <p>
            We invite organizations, communities, and visionary individuals to partner with us in 
            implementing this plan, adapting it to local contexts while maintaining alignment with 
            our core principles.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/ambassador" className="inline-flex items-center bg-cosmic-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <span>Become an Ambassador</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
