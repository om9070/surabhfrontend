import axios from 'axios';

const API_URL = "http://3.9.134.6/api";
import { Shop } from '@/types/shop'

export interface StoreType {
    id?: number;
    shop_name: string;
    shop_city: string;
    shop_state: string;
    shop_country: string;
    shop_type: string;
    store_images: File[];
    shop_description: string;
    shop_address: string;
    shop_brand: number;
    shop_zip_code: string;
}

export const fetchOneStore = async (id: number) => {
    const response = await axios.get(`${API_URL}/account/stores/${id}/`);
    return response.data;
};

export const postStore = async (data: FormData, token: string) => {
    const response = await axios.post(`${API_URL}/account/stores/`, data, {
      
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};


export const updateStore = async (id: number, data: FormData) => {
    const response = await axios.patch(`${API_URL}/account/stores/${id}/`, data);
    return response.data;
};




export const deleteStore = async (storeId: number, token: string) => {
    const response = await axios.delete(`${API_URL}/account/stores/${storeId}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};



export const fetchAllStores = async () => {
    try {
        const response = await axios.get(`${API_URL}/account/stores/`);
        // You can log the data for debugging purposes
        console.log("Fetched Stores Data:", response.data);
        return response.data;
    } catch (error: any) {
        // Handle error (e.g., network issues, bad responses)
        if (error.response) {
            // Server responded with a status other than 200-299
            console.error("API Error:", error.response.data);
        } else if (error.request) {
            // No response was received from the server
            console.error("Network Error: No response received", error.request);
        } else {
            // Something else went wrong in setting up the request
            console.error("Error:", error.message);
        }
        throw error; // Re-throw the error to be handled later if needed
    }
};


