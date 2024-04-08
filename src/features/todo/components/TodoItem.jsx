import { useDeleteTodoMutation } from 'features/todo/todoSlice';

export const TodoItem = ({ id, title, description }) => {
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <button type="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
