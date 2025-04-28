
import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-100 opacity-70 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 cosmic-text">The World Needs a New Blueprint</h2>
        
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Today's crises demand more than reforms — they require a civilizational transformation.
        </p>
        
        <p className="text-lg md:text-xl mb-6">
          <span className="font-semibold">PAX NOVA</span> offers a global solution: building ethical systems, 
          healing our cultures, uniting humanity, and preparing Earth for its true cosmic destiny.
        </p>
        
        {/* Visual representation of transformation */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-lg h-16">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500">
              Crisis
            </div>
            <div className="absolute h-0.5 top-1/2 transform -translate-y-1/2 left-16 right-16 bg-gradient-to-r from-red-300 via-purple-400 to-blue-400"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-500">
              Peace
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cosmic-gradient text-white flex items-center justify-center shadow-cosmic animate-pulse-slow">
              PAX NOVA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
