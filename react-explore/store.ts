import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import {postApi} from "./src/apis/postApi"

const store = configureStore({

    reducer:{
       [postApi.reducerPath]:postApi.reducer,
       
    },
    middleware:(getDefaultMiddleWate)=>getDefaultMiddleWate().concat([postApi.middleware])
});

export default store;