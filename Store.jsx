// import { configureStore } from '@reduxjs/toolkit';
// import CartSlice from './slice/CartSlice';
// import { RestaurantSlice } from './slice/ResturantSlice';
// import ResturantData from './slice/ResturantData';

// export const store = configureStore({
//     reducer:{
//         cart: CartSlice,
//         resturant:RestaurantSlice,
//         [ResturantData.reducerPath]:ResturantData.reducer,
//     },
//         middleware:(getDefaultMiddleWare)=>{
//             getDefaultMiddleWare({
//                 serializableCheck: false,
//             }).concat(
//                 ResturantData.middleware,
//             )
//         }
  
// });
// export default store;