import { postBrand, updateBrand, fetchOneBrand, fetchAllBrands } from "@/api/brandApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";

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

// Fetch a single brand by ID
export const useFetchBrandQuery = (brandId: number) => {
    return useQuery<BrandType, AxiosError>(
        ["brand", brandId],
        () => fetchOneBrand(brandId),
        {
            enabled: !!brandId, // Fetch only if brandId exists
            onError: (error) => {
                console.error("Error fetching brand:", error.message);
            },
        }
    );
};

// Fetch all brands
export const useFetchAllBrandsQuery = () => {
    return useQuery<BrandType[], AxiosError>(
        "all-brands",
        fetchAllBrands,
        {
            onError: (error) => {
                console.error("Error fetching all brands:", error.message);
            },
        }
    );
};

// Create a new brand
export const usePostBrandMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<BrandType, AxiosError, BrandType>(postBrand, {
        onSuccess: (newBrand) => {
            console.log("Brand created successfully:", newBrand);

            queryClient.invalidateQueries("all-brands");
        },
        onError: (error) => {
            console.error("Error creating brand:", error.message);
        },
    });
};

// Update an existing brand
export const useUpdateBrandMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<BrandType, AxiosError, { id: number; data: FormData }>(
        ({ id, data }) => updateBrand(id, data),
        {
            onSuccess: (updatedBrand) => {
                console.log("Brand updated successfully:", updatedBrand);


                queryClient.invalidateQueries(["brand", updatedBrand.id]);
                queryClient.invalidateQueries("all-brands");
            },
            onError: (error) => {
                console.error("Error updating brand:", error.message);
            },
        }
    );
};
