import { fetchOneUser, fetchAllUsers, updateUser, deleteUser, fetchCountries, fetchStates, fetchCitiesByCountry, fetchCitiesByState   } from "@/api/personalApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError } from "axios";

export interface InfoType {
    email: string;
    first_name: string;
    last_name: string;
    country: string;
    state: string;
    city: string;
    dob: string;  
}



// Fetch a single user by ID
export const useFetchUserQuery = (userId: number) => {
    return useQuery<InfoType, AxiosError>(
        ["user", userId],
        () => fetchOneUser(userId),
        {
            enabled: !!userId, // Fetch only if userId exists
            onError: (error) => {
                console.error("Error fetching user:", error.message);
            },
        }
    );
};

// Fetch all users
export const useFetchAllUsersQuery = () => {
    return useQuery<InfoType[], AxiosError>(
        "all-users",
        fetchAllUsers,
        {
            onError: (error) => {
                console.error("Error fetching all users:", error.message);
            },
        }
    );
};



// Update an existing user
export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<InfoType, AxiosError, { id: number; data: Partial<InfoType> }>(
        ({ id, data }) => updateUser(id, data),
        {
            onSuccess: (updatedUser) => {
                console.log("User updated successfully:", updatedUser);

                // Invalidate queries to refresh affected data
                queryClient.invalidateQueries(["user", updatedUser.email]); // Assuming email is unique
                queryClient.invalidateQueries("all-users");
            },
            onError: (error) => {
                console.error("Error updating user:", error.response?.data || error.message);
            },
        }
    );
};

// Delete a user
export const useDeleteUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<void, AxiosError, number>(deleteUser, {
        onSuccess: () => {
            console.log("User deleted successfully");

            // Invalidate queries to refresh user lists
            queryClient.invalidateQueries("all-users");
        },
        onError: (error) => {
            console.error("Error deleting user:", error.response?.data || error.message);
        },
    });
};

// Fetch all countries
export const useCountriesQuery = () =>
    useQuery<string[], AxiosError>("countries", fetchCountries, {
        staleTime: 10 * 60 * 1000, // Cache for 10 minutes
        onError: (error) => console.error("Error fetching countries:", error.message),
    });

// Fetch states by country code
export const useStatesQuery = (countryCode: string) =>
    useQuery<string[], AxiosError>(
        ["states", countryCode],
        () => fetchStates(countryCode),
        {
            enabled: !!countryCode, // Fetch only if countryCode is provided
            onError: (error) => console.error("Error fetching states:", error.message),
        }
    );

// Fetch cities by country code
export const useCitiesByCountryQuery = (countryCode: string) =>
    useQuery<string[], AxiosError>(
        ["cities", countryCode],
        () => fetchCitiesByCountry(countryCode),
        {
            enabled: !!countryCode, // Fetch only if countryCode is provided
            onError: (error) => console.error("Error fetching cities by country:", error.message),
        }
    );

// Fetch cities by country and state codes
export const useCitiesByStateQuery = (countryCode: string, stateCode: string) =>
    useQuery<string[], AxiosError>(
        ["cities", countryCode, stateCode],
        () => fetchCitiesByState(countryCode, stateCode),
        {
            enabled: !!countryCode && !!stateCode, // Fetch only if both country and state codes are provided
            onError: (error) => console.error("Error fetching cities by state:", error.message),
        }
    );