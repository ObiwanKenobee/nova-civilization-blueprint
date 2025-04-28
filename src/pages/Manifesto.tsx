
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Manifesto = () => {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white">
      <Helmet>
        <title>Unified Humanity Manifesto | PAX NOVA</title>
        <meta name="description" content="The Unified Humanity Manifesto - A comprehensive blueprint for creating a just, ethical, and sustainable global civilization." />
        <meta name="keywords" content="unified humanity manifesto, ethical civilization, global justice, new earth blueprint, civilization future" />
        <link rel="canonical" href="https://paxnova.org/manifesto" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">The Unified Humanity Manifesto</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-light text-gray-700 mb-8">
            The civilizational crisis we face is unprecedented—but so is our potential to build anew. This manifesto
            outlines the path to transform our world into one that honors life, justice, and our cosmic destiny.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">I. The Great Transition</h2>
          <p>
            Humanity stands at an evolutionary threshold. The old structures—built on exploitation, division and 
            short-term thinking—are collapsing under their own weight. This collapse is not just a crisis but an 
            opportunity for rebirth: the essential precursor to building a civilization worthy of our highest nature.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">II. Ethical Foundations</h2>
          <p>
            The new civilization must be built on foundations of:
          </p>
          <ul>
            <li>Universal dignity and compassion for all beings</li>
            <li>Truth and reconciliation for historical wrongs</li>
            <li>Harmonious relationship with Earth's living systems</li>
            <li>Governance structures that embody wisdom, justice and foresight</li>
            <li>Technologies that enhance rather than diminish our humanity</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">III. The Path Forward</h2>
          <p>
            We call for the creation of:
          </p>
          <ul>
            <li>Ethical technology councils to guide innovation toward serving life</li>
            <li>New economic models measuring wellbeing, not just growth</li>
            <li>Global justice frameworks respecting all cultures while upholding universal rights</li>
            <li>Educational systems nurturing wisdom, creativity and whole-person development</li>
            <li>Environmental restoration as a central civilizational project</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">IV. Your Role</h2>
          <p>
            Each of us carries a spark of the divine—an innate capacity to create, heal, and transform. 
            The most profound change begins within, but it cannot end there. We invite you to join us in 
            building the foundations of a world worthy of our children's children, and of the cosmic 
            destiny that awaits an awakened humanity.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/action-plan" className="inline-flex items-center bg-cosmic-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <span>See Our Action Plan</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
