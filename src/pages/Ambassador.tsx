
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Ambassador = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white">
      <Helmet>
        <title>Ambassador Program | PAX NOVA</title>
        <meta name="description" content="Join our global ambassador network and lead movements for peace, justice, and innovation in your community and beyond." />
        <meta name="keywords" content="ambassador program, community leadership, global change, ethical movement, peace building" />
        <link rel="canonical" href="https://paxnova.org/ambassador" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center cosmic-text">Ambassador Program</h1>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Lead movements for peace, justice, and innovation in your community and beyond
        </p>
        
        {/* Hero Image Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-80">
          <div className="absolute inset-0 bg-cosmic-dark opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="Global community of change makers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-4">Become a Force for Global Transformation</h2>
              <p className="text-xl max-w-2xl">
                PAX NOVA Ambassadors are the heartbeat of our movement, creating ripples of positive change worldwide
              </p>
            </div>
          </div>
        </div>
        
        {/* What Ambassadors Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">What Ambassadors Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Build Local Communities</h3>
              <p className="text-gray-600">Create and nurture local hubs that embody PAX NOVA principles and practices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Lead Conversations</h3>
              <p className="text-gray-600">Facilitate discussions, workshops and events that spread visionary ideas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Launch Projects</h3>
              <p className="text-gray-600">Initiate and coordinate local or global initiatives aligned with our mission.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Connect Networks</h3>
              <p className="text-gray-600">Bridge between different movements, organizations and communities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Advocate for Change</h3>
              <p className="text-gray-600">Represent PAX NOVA principles in public forums and decision-making bodies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-cosmic-gradient flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Create Legacy</h3>
              <p className="text-gray-600">Build lasting institutions that embody our vision for generations to come.</p>
            </div>
          </div>
        </section>
        
        {/* Ambassador Benefits */}
        <section className="mb-16 bg-cosmic-dark text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Ambassador Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive training in leadership, organizing, and ethical innovation</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to global network of visionary changemakers</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special access to PAX NOVA events, retreats, and summits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Resources, funding opportunities, and project support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentorship from global leaders in various fields</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Platform to amplify your vision and initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Apply to Become an Ambassador</h2>
          
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="location" className="block text-gray-700 mb-2">Location (City, Country)</label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="why" className="block text-gray-700 mb-2">Why do you want to become a PAX NOVA Ambassador?</label>
              <textarea
                id="why"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light resize-none"
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-gray-700 mb-2">Relevant experience or skills you bring</label>
              <textarea
                id="experience"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cosmic-light resize-none"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="bg-cosmic-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Ambassador;
