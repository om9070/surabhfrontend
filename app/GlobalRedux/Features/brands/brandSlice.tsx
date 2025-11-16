"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType } from '@/types';

interface BrandsState {
    brands: BrandType[];
}



const initialState: BrandsState = {
    brands: [],
};

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        setBrands: (state, action: PayloadAction<BrandType[]>) => {
            state.brands = action.payload;
        },
    },
});

export const { setBrands } = brandsSlice.actions;
export const selectBrands = (state: { brands: BrandsState }) => state.brands.brands;

export default brandsSlice.reducer;
