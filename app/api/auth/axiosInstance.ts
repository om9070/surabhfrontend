import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create an instance of axios
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Set your base URL
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors or modify responses
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        // Handle errors (e.g., display error messages, etc.)
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
