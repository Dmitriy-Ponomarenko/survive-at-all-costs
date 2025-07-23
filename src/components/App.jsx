// src/components/App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage/LandingPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';

import { withAuthProtection } from '../utils/withAuthProtection';

export const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication routes */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected routes */}
      <Route path="/profile/:id" element={withAuthProtection(ProfilePage)} />

      {/* 404 route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
