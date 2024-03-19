import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65eade7c43ce16418932ab09.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: result =>
        result ? result.map(({ id }) => ({ type: 'Todo', id })) : ['Todo'],
      transformResponse: response => response.sort((a, b) => b.id - a.id),
    }),
    getTodoById: builder.query({
      query: id => `/todos/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    addTodo: builder.mutation({
      query: todo => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
