// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import cartReducer from '../redux/cartSlice';
import userReducer from '../redux/userSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
  // Additional configuration options if needed
};

const userPersistConfig = {
  key: 'user',
  storage,
  // Additional configuration options if needed
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user: persistedUserReducer,
  },
  // Any other store configurations you might have
});

export const persistor = persistStore(store);