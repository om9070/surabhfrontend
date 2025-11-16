import { StateCreator } from 'zustand';
import { UserProfile } from '@/types/auth';

export interface AuthState {
    user: UserProfile | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (user: UserProfile, token: string) => void;
    logout: () => void;
}


export const createAuthSlice: StateCreator<AuthState> = (set) => ({
    user: null,
    token: null,
    isAuthenticated: false,

    login: (user, token) => {
        if (token) {
            localStorage.setItem('authToken', token);  // Store the token in localStorage
        }
        set({ user, token, isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem('authToken');  // Remove the token on logout
        set({ user: null, token: null, isAuthenticated: false });
    },
});

// Hydrate the Zustand store from localStorage
export const hydrateAuthStore = (set: any) => {
    const token = localStorage.getItem('authToken');  // Get token from localStorage

    if (token) {
        // You can create a placeholder for the user here
        const placeholderUser: UserProfile = {
            id: 0,
            email: '',
            first_name: '',
            last_name: '',
            user_type: 'Consumer',
            country: "",
            state: "",
            city: "",
            dob:"",
            profile_pic: null,
        };

        // Hydrate the store with user and token data from localStorage
        set({
            user: placeholderUser, // You may want to replace this with actual user data if you have an API to fetch user info based on token
            token,
            isAuthenticated: true,
        });
    }
};
