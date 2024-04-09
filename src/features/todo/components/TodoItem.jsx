import {
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
} from 'features/todo/todoSlice';

export const TodoItem = ({ id, title, description }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const { data: todo } = useGetTodoByIdQuery(id);
  console.log(todo);
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <button type="button" onClick={() => null}>
        Edit
      </button>
      <button type="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
