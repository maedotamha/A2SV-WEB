import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jobApi } from "./service/data";
 
export const store = configureStore({
    reducer :{
        [jobApi.reducerPath] : jobApi.reducer
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(jobApi.middleware)
})