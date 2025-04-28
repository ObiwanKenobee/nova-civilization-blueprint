
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <div className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="prose prose-sm max-w-none text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is PAX NOVA's main mission?",
      answer: (
        <p>
          PAX NOVA's mission is to catalyze a comprehensive civilizational transformation 
          based on ethical principles, spiritual wisdom, ecological harmony, and social justice. 
          We aim to build the foundations for a peaceful, just, and thriving planetary civilization 
          that honors the dignity of all beings and prepares humanity for its cosmic destiny.
        </p>
      ),
    },
    {
      question: "How is PAX NOVA different from other movements?",
      answer: (
        <>
          <p>
            Unlike many movements that focus on single issues or incremental reforms, 
            PAX NOVA offers a holistic approach to civilizational transformation. Key differences include:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Integration of spiritual wisdom with cutting-edge innovation</li>
            <li>Focus on systemic redesign rather than symptom management</li>
            <li>Bridging diverse fields including technology, governance, culture, and ecology</li>
            <li>Balancing practical action with long-term visionary thinking</li>
            <li>Commitment to universal principles while honoring cultural diversity</li>
          </ul>
        </>
      ),
    },
    {
      question: "Who can join PAX NOVA?",
      answer: (
        <p>
          PAX NOVA welcomes all who resonate with our vision and core principles, 
          regardless of background, profession, or belief system. We particularly invite 
          visionaries, innovators, leaders, healers, artists, scientists, and anyone committed 
          to building a more beautiful world. The movement is designed to accommodate various 
          levels of engagement, from casual supporters to deeply committed Ambassadors.
        </p>
      ),
    },
    {
      question: "What are your core principles?",
      answer: (
        <ul className="list-disc pl-5">
          <li><strong>Universal Dignity</strong> - Recognizing the inherent worth of all beings</li>
          <li><strong>Ethical Innovation</strong> - Ensuring technology serves life, not controls it</li>
          <li><strong>Ecological Wisdom</strong> - Living in harmony with Earth's systems</li>
          <li><strong>Governance by Wisdom</strong> - Creating just systems guided by foresight</li>
          <li><strong>Cultural Renaissance</strong> - Reviving beauty, meaning, and transcendent values</li>
          <li><strong>Unity in Diversity</strong> - Honoring cultural uniqueness within global harmony</li>
          <li><strong>Cosmic Perspective</strong> - Preparing humanity for its role in the larger universe</li>
        </ul>
      ),
    },
    {
      question: "How does PAX NOVA approach technology?",
      answer: (
        <p>
          We advocate for a discerning approach to technology that evaluates innovations 
          based on their ability to enhance human dignity, ecological health, and societal 
          wellbeing. We believe in developing ethical frameworks for emerging technologies 
          like AI, biotechnology, and quantum computing, ensuring they serve humanity's 
          highest aspirations rather than undermining them. Our approach includes deep 
          consideration of unintended consequences and long-term impacts.
        </p>
      ),
    },
    {
      question: "How can I contribute to PAX NOVA's mission?",
      answer: (
        <>
          <p>There are many ways to contribute:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Sign up as a member to access resources and connect with others</li>
            <li>Apply to become an Ambassador to lead initiatives in your community</li>
            <li>Share our content and vision with your networks</li>
            <li>Contribute your expertise to specific projects</li>
            <li>Support financially through donations or membership</li>
            <li>Implement PAX NOVA principles in your organization or community</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the 'Unified Humanity Manifesto'?",
      answer: (
        <p>
          The Unified Humanity Manifesto is our foundational document outlining the vision, 
          principles, and blueprint for the civilization we seek to build. It articulates 
          the core challenges we face, the opportunities present in this historical moment, 
          and a comprehensive approach to transformation across multiple domains including 
          governance, economics, technology, culture, and ecology. The Manifesto serves as 
          both a guiding document and a rallying point for alignment among diverse stakeholders.
        </p>
      ),
    },
  ];

  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true // First item open by default
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white">
      <Helmet>
        <title>FAQ | PAX NOVA</title>
        <meta name="description" content="Frequently asked questions about PAX NOVA, our mission, principles, and how you can contribute to building a new civilization." />
        <meta name="keywords" content="PAX NOVA FAQ, new civilization questions, ethical technology FAQ, civilization transformation, cosmic destiny" />
        <link rel="canonical" href="https://paxnova.org/faq" />
      </Helmet>
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">Frequently Asked Questions</h1>
        
        <p className="text-xl text-center mb-16">
          Common questions about our mission, approach, and how to get involved
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={!!openItems[index]}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6">Contact us or join our community to learn more</p>
          <a href="/auth" className="inline-flex items-center bg-cosmic-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <span>Join Our Community</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
