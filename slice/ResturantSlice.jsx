import {createSlice} from '@reduxjs/toolkit';

const intialState = {
    resturant:null,
}

export const RestaurantSlice = createSlice({
    name:'restaurant',
    intialState,
    reducers:{
       
        setResturant:(state,action)=>{
            state.resturant = action.payload
        }
    }
})

// action creators are generated for each case reducer function

export const {setResturant} = counterSlice.actions
export const selectRestaurant = state=>state.resturant.resturant;
export default RestaurantSlice.reducer