"use client"

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import brandReducer from './brands/brandSlice';
import shopReducer from './shops/shopSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        brands: brandReducer,
        shops: shopReducer,
    },
});

export default store;