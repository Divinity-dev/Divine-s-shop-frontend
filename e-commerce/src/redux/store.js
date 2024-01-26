import cartReducer from '../redux/cartSlice'
import {configureStore} from '@reduxjs/toolkit';
import  useReducer  from '../redux/userSlice';


export default configureStore({
    reducer:{
        cart:cartReducer,
        user: useReducer
    }
})