import {createSlice} from '@reduxjs/toolkit'

export const productslice = createSlice(
    {
        name: productslice,
        initialState:{
            products:[],
            isfetching: false,
            error:false,
        },
        reducers:{

        }
    }
)

export const {}= productslice.actions
export default productslice.reducer