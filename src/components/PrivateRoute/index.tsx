import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('username') || !!document.cookie.split('; ').find(row => row.startsWith('username='));

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default PrivateRoute;