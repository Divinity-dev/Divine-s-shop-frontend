import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducer:{
        addProducts:(state, action)=>{
            state.quantity +=1;
            state.products.push(action.payload.products);
            state.total = action.payload.Price * action.payload.quantity;
        }
    }
})

export const  {addProducts} = cartSlice.actions
export default cartSlice.reducer