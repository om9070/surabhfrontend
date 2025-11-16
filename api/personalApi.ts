import axios from 'axios';

const API_URL = "http://3.9.134.6/api";

export interface InfoType {
    email: string; 
    first_name: string;
    last_name: string;
    country: string;
    state: string;
    city: string;
    dob: string;
  
}



// Utility to convert data to FormData
const toFormData = (data: Record<string, any>): FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            formData.append(key, value as string | Blob);
        }
    });
    return formData;
};

// Fetch a single user by ID
export const fetchOneUser = async (id: number) => {
    const response = await axios.get(`${API_URL}/account/users/${id}/`);
    return response.data;
};


// Update a user by ID
export const updateUser = async (id: number, data: Partial<InfoType>) => {
    const formData = toFormData(data);
    const response = await axios.patch(`${API_URL}/account/users/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

// Delete a user by ID
export const deleteUser = async (userId: number) => {
    const response = await axios.delete(`${API_URL}/account/users/${userId}`);
    return response.data;
};

// Fetch all users
export const fetchAllUsers = async () => {
    const response = await axios.get(`${API_URL}/account/users/`);
    return response.data;
};


const API_BASE_URL = "https://country-state-city-search-rest-api.p.rapidapi.com";
const API_HEADERS = {
    "x-rapidapi-host": "country-state-city-search-rest-api.p.rapidapi.com",
    "x-rapidapi-key": "c8db6d1632msh73880fd1f28908ep1bf9a1jsnbd161bb1efcb",
};

// Axios instance for centralized API calls
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: API_HEADERS,
});

// Fetch all countries
export const fetchCountries = async () => {
    const response = await apiClient.get("/allcountries");
    return response.data;
};


// Fetch states by country code
export const fetchStates = async (countryCode: string) => {
    const response = await apiClient.get(`/states-by-countrycode?countrycode=${countryCode}`);
    return response.data;
};

// Fetch cities by country code
export const fetchCitiesByCountry = async (countryCode: string) => {
    const response = await apiClient.get(`/cities-by-countrycode?countrycode=${countryCode}`);
    return response.data;
};

// Fetch cities by country and state codes
export const fetchCitiesByState = async (countryCode: string, stateCode: string) => {
    const response = await apiClient.get(`/cities-by-countrycode-and-statecode?countrycode=${countryCode}&statecode=${stateCode}`);
    return response.data;
};
