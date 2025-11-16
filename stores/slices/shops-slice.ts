import { StateCreator } from 'zustand';
import { Shop } from '@/types/shop';

export interface ShopState {
  shops: Shop[];
  selectedShop: Shop | null; // Allow `null` if no shop is selected initially
  addShop: (shop: Shop) => void;
  removeShop: (id: number) => void;
  singleShop: (id: number) => void;
}

export const createShopSlice: StateCreator<ShopState> = (set) => ({
  shops: [],
  selectedShop: null, // Initialize `selectedShop` as null or a default value

  // addShop: (shop: Shop) =>
  //   set((state) => ({
  //     shops: [...state.shops, shop],
  //   })),
  addShop: (shops: Shop[] | Shop) =>
    set((state) => {
      const newShops = Array.isArray(shops) ? shops : [shops];
      const existingIds = state.shops.map((shop) => shop.id);
      const uniqueShops = newShops.filter((shop) => !existingIds.includes(shop.id));
      return {
        shops: [...state.shops, ...uniqueShops],
      };
    }),
  
  

  removeShop: (id) =>
    set((state) => ({
      shops: state.shops.filter((shop) => shop.id !== id),
      // Reset `selectedShop` if the removed shop was selected
      selectedShop: state.selectedShop?.id === id ? null : state.selectedShop,
    })),

  singleShop: (id) =>
    set((state) => ({
      selectedShop: state.shops.find((shop) => shop.id === id) || null, // Update `selectedShop` to the matching shop
    })),
});
