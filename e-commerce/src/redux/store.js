import cartReducer from '../redux/cartSlice'
import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from '../redux/userSlice';


export default configureStore({
    reducer:{
        cart:cartReducer,
        user: userReducer
    }
})