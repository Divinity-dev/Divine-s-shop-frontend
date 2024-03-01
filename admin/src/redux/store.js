// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import userReducer from '../redux/userSlice';



const userPersistConfig = {
  key: 'user',
  storage,
  // Additional configuration options if needed
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  // Any other store configurations you might have
});

export const persistor = persistStore(store);