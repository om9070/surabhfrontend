import axios from 'axios';


const API_URL = "http://3.9.134.6"

export const fetchProducts = async () => {
    return await axios.post(`${API_URL}/product/products`);
}

export const fetchProductCategories = async () => {
    return await axios.post(`${API_URL}/category/categories`);
}
