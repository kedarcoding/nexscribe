// src/services/api.js
import axios from 'axios';

// Function to retrieve the token from storage
function getToken() {
  // Example using localStorage; modify as needed based on your storage strategy
  return localStorage.getItem('token');
}

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000, // Set a timeout limit (in milliseconds) for requests
});

// Add a request interceptor to include the authorization token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Function to handle API requests
const apiRequest = async (method, endpoint, data = null) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('API request failed:', error);
    throw error;
  }
};

// Exported functions for each HTTP method
export const get = (endpoint) => apiRequest('GET', endpoint);
export const post = (endpoint, data) => apiRequest('POST', endpoint, data);
export const put = (endpoint, data) => apiRequest('PUT', endpoint, data);
export const patch = (endpoint, data) => apiRequest('PATCH', endpoint, data);
export const del = (endpoint) => apiRequest('DELETE', endpoint);
