
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('auth');
      if (authData) {
        const parsedData = JSON.parse(authData);
        if (parsedData.isAuthenticated) {
          setIsAuthenticated(true);
          setUserName(parsedData.name);
        } else {
          setIsAuthenticated(false);
          setUserName('');
        }
      } else {
        setIsAuthenticated(false);
        setUserName('');
      }
    };
    
    checkAuth();
    
    // Listen for storage events to update auth status
    window.addEventListener('storage', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [location]);
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle authentication actions
  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };
  
  // Don't show navbar on auth page
  if (location.pathname === '/auth') {
    return null;
  }
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'cosmic-text' : 'text-white'
            }`}>
              PAX NOVA
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-cosmic-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/manifesto" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Manifesto
            </Link>
            <Link 
              to="/action-plan" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Action Plan
            </Link>
            <Link 
              to="/resources" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/ambassador" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Ambassador
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              FAQ
            </Link>
            
            {isAuthenticated ? (
              <Button 
                onClick={handleAuthAction}
                variant={isScrolled ? 'primary' : 'secondary'}
                size="sm"
              >
                Dashboard
              </Button>
            ) : (
              <Button 
                onClick={handleAuthAction}
                variant={isScrolled ? 'primary' : 'secondary'}
                size="sm"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/manifesto" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Manifesto
              </Link>
              <Link to="/action-plan" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Action Plan
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/ambassador" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                Ambassador
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-cosmic-dark font-medium" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              {isAuthenticated ? (
                <Button onClick={handleAuthAction} size="sm" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Button>
              ) : (
                <Button onClick={handleAuthAction} size="sm" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
