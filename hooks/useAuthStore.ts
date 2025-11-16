import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile } from '@/types/auth';

export const useAuthStore = create<any>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            setToken: (token: string | null) => set(() => ({ token })),
            setUser: (user: UserProfile | null) => set(() => ({ user })),
            logout: () => set(() => ({ token: null, user: null })),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ token: state.token, user: state.user }),
        }
    )
);

