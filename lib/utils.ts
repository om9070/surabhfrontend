import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from 'axios';

// API URL
const API_URL = "http://localhost:4000";
// const API_URL= "http://127.0.0.1:8000";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertBlobToBase64 = (blob: Blob) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);  // Base64 string
        reader.onerror = reject;
        reader.readAsDataURL(blob);  // Convert Blob to Base64
    });
};


export const apiRequest = async (method: string, url: string, data?: any, p0?: { headers: { 'Content-Type': string; }; }) => {
    try {
        const response = await axios({
            method,
            url: `${API_URL}${url}`,
            data,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const serverMessage = error.response?.data?.data?.message;

            if (status === 409) {
                // Handle the conflict error with a user-friendly message
                throw new Error(serverMessage || 'A user with this information already exists.');
            }

            // Log and throw a more generic error if it's not a 409 error
            // console.error('API request failed:', status, error.response?.data);
            throw new Error(serverMessage || 'An unexpected error occurred.');
        } else {
            // console.error('Unexpected error:', error);
            throw new Error('An unexpected error occurred.');
        }
    }
};