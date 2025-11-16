import axios from "axios"
import { useQuery } from "react-query"

const API_URL = "http://3.9.134.6"

export const useProductsData = () =>{
    return useQuery('products', async() =>{
        const response = await axios.get(`${API_URL}/api/product/products/`)
        return response.data
    })
}