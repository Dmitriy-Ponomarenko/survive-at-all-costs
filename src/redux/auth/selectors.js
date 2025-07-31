// src/redux/auth/selectors.js

export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
