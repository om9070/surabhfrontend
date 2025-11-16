import axios from 'axios';

// const API_URL = "http://3.9.134.6/api";
const API_URL = "http://127.0.0.1:8000/api";

export interface BrandType {
    id: number;
    brand_name: string;
    brand_description?: string | null;
    brand_logo?: string | null;
    brand_address?: string | null;
    brand_country?: string | null;
    brand_state?: string | null;
    brand_city?: string | null;
    brand_zip_code?: string | null;
    brand_pic?: File | null;
}

export const fetchOneBrand = async (id: number) => {
    const response = await axios.get(`${API_URL}/account/brands/${id}/`);
    return response.data;
};

export const postBrand = async (data: BrandType) => {
    const response = await axios.post(`${API_URL}/account/brands/`, data);
    return response.data;
};



export const updateBrand = async (id: number, data: FormData) => {
    const response = await axios.patch(`${API_URL}/account/brands/${id}/`, data);
    return response.data;
};

export const deleteBrand = async (brandId: number) => {
    const response = await axios.delete(`${API_URL}/account/brands/${brandId}`);
    return response.data;
};

export const fetchAllBrands = async () => {
    const response = await axios.get(`${API_URL}/api/brands`);
    return response.data;
};



