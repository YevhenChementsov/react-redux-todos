import { useGetTodosQuery } from 'features/todo/todoSlice';

export const App = () => {
  const { data } = useGetTodosQuery();
  console.log(data);

  return (
    <ul>
      {data?.map(todo => (
        <li key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.isCompleted}</p>
        </li>
      ))}
    </ul>
  );
};
