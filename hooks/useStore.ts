import { postStore, updateStore, fetchOneStore, fetchAllStores, deleteStore } from "@/api/storeAPI";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { Shop } from "@/types/shop";



// Fetch a single store by ID
export const useFetchStoreQuery = (storeId: number) => {
    return useQuery<Shop, AxiosError>(
        ["store", storeId],
        () => fetchOneStore(storeId),
        {
            enabled: !!storeId, // Fetch only if storeId exists
            onError: (error) => {
                console.error("Error fetching store:", error.message);
            },
        }
    );
};

// Fetch all stores
export const useFetchAllStoresQuery = () => {
    return useQuery<Shop[], AxiosError>(
        "all-stores",
        fetchAllStores,
        {
            onError: (error) => {
                console.error("Error fetching all stores:", error.message);
            },
        }
    );
};

// Create a new store
// export const usePostStoreMutation = () => {
//     const queryClient = useQueryClient();

//     return useMutation<Shop, AxiosError, Shop>(postStore, {
//         onSuccess: (newStore) => {
//             console.log("Store created successfully:", newStore);

//             queryClient.invalidateQueries("all-stores");
//         },
//         onError: (error) => {
//             console.error("Error creating store:", error.message);
//         },
//     });
// };


// Update an existing store
export const useUpdateStoreMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<Shop, AxiosError, { id: number; data: FormData }>(
        ({ id, data }) => updateStore(id, data), // API call to update store
        {
            onSuccess: (updatedStore) => {
                console.log("Store updated successfully:", updatedStore);
                queryClient.invalidateQueries(["store", updatedStore.id]); // Refresh the specific store
                queryClient.invalidateQueries("all-Stores"); // Refresh all stores
            },
            onError: (error) => {
                console.error("Error updating store:", error.message);
            },
        }
    );
};


// Delete a store 
export const useDeleteStoreMutation = () => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async (storeId: number) => {
        const token = localStorage.getItem("authToken"); // Retrieve the token
        if (!token) {
          throw new Error("No authentication token found");
        }
        return deleteStore(storeId, token); // Pass token to deleteStore API call
      },
      {
        onMutate: async (storeId) => {
          await queryClient.cancelQueries({ queryKey: ["stores"] });
          const previousStores = queryClient.getQueryData<Shop[]>(["stores"]);
          queryClient.setQueryData(
            ["stores"],
            previousStores?.filter((store) => store.id !== storeId)
          );
          return { previousStores };
        },
        onError: (error, storeId, context: any) => {
          queryClient.setQueryData(["stores"], context.previousStores);
          alert("Error deleting the store.");
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["stores"] });
        },
      }
    );
  };
