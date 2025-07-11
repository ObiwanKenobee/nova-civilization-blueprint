
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth') ? 
    JSON.parse(localStorage.getItem('auth')!).isAuthenticated : false;

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
