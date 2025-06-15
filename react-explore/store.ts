import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './src/apis/postApi';
import { productApi } from './src/apis/productApi';

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleWate) =>
    getDefaultMiddleWate().concat([postApi.middleware, productApi.middleware]),
});

export default store;
