
import React, { createContext, useState, useEffect, useContext } from 'react';

export interface User {
  name: string;
  email: string;
  role: 'visitor' | 'seeker' | 'builder' | 'ambassador' | 'elder';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const parsedData = JSON.parse(authData);
      if (parsedData.isAuthenticated) {
        setUser({
          name: parsedData.name,
          email: parsedData.email,
          role: parsedData.role,
        });
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('auth', JSON.stringify({ 
      ...userData, 
      isAuthenticated: true 
    }));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
