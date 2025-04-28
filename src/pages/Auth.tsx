
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Button from '@/components/Button';
import { useToast } from '@/components/ui/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // This is a mock authentication function.
  // In a real app, this would connect to a backend service
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, store user info in localStorage
      localStorage.setItem('auth', JSON.stringify({ 
        name: name || email.split('@')[0],
        email, 
        role: 'seeker',
        isAuthenticated: true
      }));
      
      toast({
        title: isLogin ? "Welcome back!" : "Welcome to PAX NOVA!",
        description: isLogin 
          ? "You've successfully signed in." 
          : "Your account has been created. You are now a Seeker.",
      });

      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0032] via-[#190061] to-[#240090] star-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6 cosmic-text">
              {isLogin ? 'Sign In to PAX NOVA' : 'Join PAX NOVA'}
            </h2>
            
            <div className="text-sm text-center mb-6 text-gray-600">
              {isLogin ? 'Access the sacred knowledge and community' : 'Begin your journey as a Builder of the New Earth'}
            </div>
            
            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && (
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <User size={16} />
                    </span>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="pl-10"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Mail size={16} />
                  </span>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Lock size={16} />
                  </span>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                className="text-sm text-cosmic-dark hover:text-cosmic hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Don't have an account? Join PAX NOVA" : "Already have an account? Sign In"}
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
              By continuing, you agree to the PAX NOVA <a href="#" className="text-cosmic-light hover:underline">Sacred Covenant</a> and <a href="#" className="text-cosmic-light hover:underline">Code of Conduct</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
