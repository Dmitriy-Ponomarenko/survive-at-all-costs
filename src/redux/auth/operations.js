// src/redux/auth/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/register', credentials);

      const { user, accessToken } = data;
      localStorage.setItem('token', accessToken);
      setAuthHeader(accessToken);

      return { user, accessToken };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          message: error.response?.data?.message || 'Registration failed',
        });
      }
      return thunkAPI.rejectWithValue({ message: 'An unknown error occurred' });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/login', credentials);

      const { user, accessToken } = data;
      localStorage.setItem('token', accessToken);
      setAuthHeader(accessToken);

      return { user, accessToken };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          message: error.response?.data?.message || 'Login failed',
        });
      }
      return thunkAPI.rejectWithValue({ message: 'An unknown error occurred' });
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    localStorage.removeItem('token');
    clearAuthHeader();
    return {};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || 'Logout failed',
      });
    }
    return thunkAPI.rejectWithValue({ message: 'An unknown error occurred' });
  }
});
