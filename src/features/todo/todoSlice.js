import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://65eade7c43ce16418932ab09.mockapi.io/api/v1';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
