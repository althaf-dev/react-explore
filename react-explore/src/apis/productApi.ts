import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import CONSTANTS from "../constants/constants";


export const productApi = createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({
        baseUrl:CONSTANTS.PRODUCT_URL
    }),
    tagTypes: ['Posts'],
    endpoints:(builder)=>({
        getProducts:builder.query<any,any>({
            query:(category)=>({
                url:"/filter",
                method:"post",
                body:{category},
                headers:{
                    "Content-Type":"application/json"
                }
            }),
            providesTags: () => [{ type: 'Posts', id: 'LIST' }]

        }),
        addProducts:builder.mutation<any,any>({
            query:(payload)=>({
                url:"add",
                method:"post",
                body:{item:payload}
            }),
            invalidatesTags:[{ type: 'Posts', id: 'LIST' }]

        })
    })
});

export const {useGetProductsQuery,useAddProductsMutation} = productApi;