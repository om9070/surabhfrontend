
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface OrdersState {
    orders: any[];
    loading: boolean;
    error: string | null;
}


const initialState: OrdersState = {
    orders: [],
    loading: false,
    error: null,
};


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
 
        setOrders: (state, action: PayloadAction<any[]>) => {
            state.orders = action.payload;
        },
       
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        // Reducer for setting error state
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});


export const { setOrders, setLoading, setError } = ordersSlice.actions;


export const selectOrders = (state: { orders: OrdersState }) => state.orders;


export default ordersSlice.reducer;
