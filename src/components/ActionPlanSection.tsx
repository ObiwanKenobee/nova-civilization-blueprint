
import React from 'react';

interface PhaseProps {
  index: number;
  title: string;
  description: string;
}

const Phase = ({ index, title, description }: PhaseProps) => {
  return (
    <div className="flex group">
      <div className="mr-4 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-cosmic-gradient flex items-center justify-center text-white font-bold text-sm shadow-cosmic group-hover:animate-pulse-glow">
          {index}
        </div>
        {index < 8 && <div className="w-0.5 h-full bg-gradient-to-b from-cosmic-light to-cosmic-dark/30 mt-2"></div>}
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ActionPlanSection = () => {
  const phases = [
    {
      title: "Vision Codification",
      description: "Unified Humanity Manifesto"
    },
    {
      title: "Global Alliance Formation",
      description: "Science, Spirituality, Governance Leaders"
    },
    {
      title: "Prototype Ethical Technologies",
      description: "Clean, fair innovations"
    },
    {
      title: "Justice System Design",
      description: "Governance models rooted in mercy and equity"
    },
    {
      title: "Cultural Renaissance Launch",
      description: "Arts, music, education for unity"
    },
    {
      title: "Global Citizen Mobilization",
      description: "1M+ pledges for action"
    },
    {
      title: "Scaling Across Nations",
      description: "50+ country impact"
    },
    {
      title: "Building Legacy Centers",
      description: "100+ educational and innovation hubs"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center cosmic-text">
          How We Transform Civilization
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <Phase 
              key={index}
              index={index + 1}
              title={phase.title}
              description={phase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionPlanSection;
