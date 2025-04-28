
import React, { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

const JoinSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', { name, email });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName('');
    setEmail('');
  };

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 cosmic-text">
          Answer the Call
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
          Visionaries, leaders, artists, scientists, citizens — if you carry the dream of a just 
          and luminous future, PAX NOVA needs your heart, your voice, your courage.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Become a Founder
            <span className="ml-2">➔</span>
          </Button>
          
          <div className={cn(
            "mt-4 text-green-600 transition-opacity duration-300",
            submitted ? "opacity-100" : "opacity-0"
          )}>
            Thank you for joining! We'll be in touch soon.
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinSection;
