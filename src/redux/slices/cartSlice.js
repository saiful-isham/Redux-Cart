import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const exisitingProduct = state.find(item=>item.id==action.payload.id)
            if(exisitingProduct){
                const remainingProduct = state.filter(item=>item.id!=exisitingProduct.id)
                exisitingProduct.quantity++
                exisitingProduct.totalPrice = exisitingProduct.price * exisitingProduct.quantity
                state = [...remainingProduct,exisitingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }

        },

        removeCartItems:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
 
         },


         incQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
             existingProduct. quantity++
             existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
             const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
             state=[...remainingProduct,existingProduct]

         },
         decQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
             existingProduct. quantity--
             existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
             const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
             state=[...remainingProduct,existingProduct]
             

         },


         emptyCart:(state)=>{
            return state=[]
         }
    }
})

export const{addToCart,removeCartItems,incQuantity,decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer