import { AddTodoForm, TodoList } from './components';
import { useGetTodosQuery } from './todoSlice';

export const Todo = () => {
  const { data } = useGetTodosQuery();

  return (
    <>
      <AddTodoForm />
      <TodoList todos={data} />
    </>
  );
};
