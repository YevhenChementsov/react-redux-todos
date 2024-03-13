import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from 'features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
});
