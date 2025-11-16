import axios from "axios"
import { useQuery } from "react-query"

const API_URL = "http://3.9.134.6"

export const useCategoriesData = () =>{
    return useQuery('categories', async() =>{
        const response = await axios.get(`${API_URL}/api/account/categories/`)
        return response.data
    })
}