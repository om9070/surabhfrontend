
"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/types';

interface ProductsState {
    products: ProductType[];
}



const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state: { products: ProductsState }) => state.products.products;

export default productsSlice.reducer;
