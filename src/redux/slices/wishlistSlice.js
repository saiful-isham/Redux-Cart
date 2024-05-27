import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'myWishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItems:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)

        }

       

    }

})

export const {addToWishlist,removeWishlistItems} = wishlistSlice.actions


export default wishlistSlice.reducer