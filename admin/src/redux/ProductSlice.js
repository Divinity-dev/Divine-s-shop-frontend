import {createSlice} from '@reduxjs/toolkit'

export const productslice = createSlice(
    {
        name: "product",
        initialState:{
            products:[],
            isfetching: false,
            error:false,
        },
        reducers:{
           getProductStart:(state)=>{
            state.isfetching=true;
            state.error = false
           },
           getProductScuccess:(state, action)=>{
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

export const {getProductStart, getProductScuccess,  getProductfailure }= productslice.actions
export default productslice.reducer