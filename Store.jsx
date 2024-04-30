import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slice/CartSlice';
import { RestaurantSlice } from './slice/ResturantSlice';

export const store = configureStore({
    reducer:{
        cart: CartSlice,
        resturant:RestaurantSlice
    },
})