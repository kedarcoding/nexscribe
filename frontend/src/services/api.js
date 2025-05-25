// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; // Change if needed

const getToken = () => {
  // Get token from localStorage or wherever you store it
  return localStorage.getItem("token");
};

// Axios instance with token
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept every request to attach token
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Export generic methods
export const get = (url, config = {}) => axiosInstance.get(url, config);
export const post = (url, data, config = {}) => axiosInstance.post(url, data, config);
export const put = (url, data, config = {}) => axiosInstance.put(url, data, config);
export const del = (url, config = {}) => axiosInstance.delete(url, config);
