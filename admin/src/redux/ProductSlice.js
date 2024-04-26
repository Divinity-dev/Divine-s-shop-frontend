import {createSlice} from '@reduxjs/toolkit'

export const productslice = createSlice(
    {
        name: "product",
        initialState:{
            isfetching: false,
            products:[],
            error:false,
        },
        reducers:{
           getProductStart:(state)=>{
            state.isfetching=true;
            state.error = false
           },
           getProductSuccess:(state, action)=>{
            state.isfetching=false;
            state.products = action.payload
           },
           getProductfailure:(state)=>{
            state.isfetching=false;
            state.error = true
           }
        }
    }
)

export const {getProductStart, getProductSuccess,  getProductfailure }= productslice.actions
export default productslice.reducer