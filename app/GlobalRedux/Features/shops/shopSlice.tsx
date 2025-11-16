
"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopType } from '@/types';

interface ShopsState {
    shops: ShopType[];
}



const initialState: ShopsState = {
    shops: [],
};

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShops: (state, action: PayloadAction<ShopType[]>) => {
            state.shops = action.payload;
        },
    },
});

export const { setShops } = shopsSlice.actions;
export const selectShops = (state: { shops: ShopsState }) => state.shops.shops;

export default shopsSlice.reducer;
