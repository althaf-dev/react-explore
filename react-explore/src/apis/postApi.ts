import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CONSTANTS from '../constants/constants';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: CONSTANTS.BASE_URL,
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<any,void>({
      query: () => '/posts',
    }),
    getPost:build.query<any,number>({
        query:(id:number)=>`/posts/${id}`
    })
  }),
  
});

export const {useGetAllPostsQuery,useGetPostQuery} = postApi;