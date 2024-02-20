import axios from 'axios';

const BASEURL = 'http://localhost:5065/';

const axiosInstance = axios.create({
  baseURL: BASEURL, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to set the Authorization header for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Replace with your actual token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});



export default axiosInstance;
