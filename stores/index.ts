import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createAuthSlice, AuthState } from './slices/auth-slice';
import { createShopSlice, ShopState } from './slices/shops-slice';

const useStore = create<AuthState & ShopState>()(
    persist(
        (set, get, api) => ({
            ...createAuthSlice(set, get, api),
            ...createShopSlice(set, get, api)
        }),
        {
            name: 'auth-storage', // Key for the storage (localStorage)
            partialize: (state) => ({ token: state.token, user: state.user }), // Persist only specific state slices
        }
    )
);

export default useStore;
