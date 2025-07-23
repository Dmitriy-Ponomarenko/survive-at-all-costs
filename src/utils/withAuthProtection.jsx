// src/utils/withAuthProtection.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthProtection = (Component) => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
      return <Navigate to="/signin" replace />;
    }
    return <Component {...props} />;
  };
};
