import { useState } from 'react';

import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from 'features/todo/todoSlice';

export const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const { data } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleValueChange = ({ target: { value } }) => setNewTodo(value);

  const handleSubmit = async e => {
    e.preventDefault();
    if (newTodo) {
      await addTodo({ title: newTodo }).unwrap();
      setNewTodo('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          autoFocus
          name="input"
          onChange={handleValueChange}
          type="text"
          value={newTodo}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data?.map(todo => (
          <li key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
