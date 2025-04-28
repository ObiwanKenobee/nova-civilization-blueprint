
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
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
          
          {/* Right side navigation */}
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className={`hidden md:inline-block font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="#manifesto" 
              className={`hidden md:inline-block font-medium ${
                isScrolled ? 'text-gray-700 hover:text-cosmic-dark' : 'text-blue-100 hover:text-white'
              }`}
            >
              Manifesto
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
      </div>
    </nav>
  );
};

export default Navbar;
