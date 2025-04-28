
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResourceCard = ({ title, description, image, link, type }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
        <span className="text-4xl">{image}</span>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-cosmic-dark bg-blue-100 rounded-full mb-2">
          {type}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-cosmic-dark hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resource
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Resources = () => {
  const resources = [
    {
      title: "Ethical Technology Framework",
      description: "A comprehensive guide for developing technologies that serve humanity's highest potential.",
      image: "📱",
      link: "#download-ethical-tech",
      type: "PDF Guide"
    },
    {
      title: "New Earth Governance Models",
      description: "Research paper exploring alternative governance systems based on wisdom and justice.",
      image: "🏛️",
      link: "#download-governance",
      type: "Research Paper"
    },
    {
      title: "Spiritual Leadership Principles",
      description: "Learn how to lead with compassion, wisdom and vision in times of great transformation.",
      image: "✨",
      link: "#download-leadership",
      type: "eBook"
    },
    {
      title: "Environmental Regeneration Toolkit",
      description: "Practical strategies for communities to restore natural ecosystems.",
      image: "🌱",
      link: "#download-environment",
      type: "Toolkit"
    },
    {
      title: "Cultural Renaissance Planning",
      description: "How to spark artistic and cultural renewal aligned with new civilization values.",
      image: "🎭",
      link: "#download-culture",
      type: "Planning Guide"
    },
    {
      title: "Community Building Workbook",
      description: "Step-by-step approaches to creating local hubs for the new civilization.",
      image: "👥",
      link: "#download-community",
      type: "Workbook"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white">
      <Helmet>
        <title>Resource Library | PAX NOVA</title>
        <meta name="description" content="Download free resources on ethical technology, governance models, spiritual leadership, and environmental regeneration." />
        <meta name="keywords" content="ethical technology, governance models, spiritual leadership, environmental regeneration, cultural renaissance" />
        <link rel="canonical" href="https://paxnova.org/resources" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">Resource Library</h1>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Free tools, guides and research papers to help you build the new civilization
          in your community, organization, or personal life.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              image={resource.image}
              link={resource.link}
              type={resource.type}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Can't Find What You Need?</h2>
          <p className="mb-6">Join our community to request specific resources or contribute your own.</p>
          <a href="/auth" className="inline-flex items-center bg-cosmic-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <span>Join Our Community</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
