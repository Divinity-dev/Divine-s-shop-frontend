// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import userReducer from '../redux/userSlice';
import productReducer from '../redux/ProductSlice';

const userPersistConfig = {
  key: 'user',
  storage,
};

const productPersistConfig = {
  key: 'product',
  storage,
  
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    product: persistedProductReducer, 
  },

});

export const persistor = persistStore(store);
