import { TodoItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos?.map(({ id, title, description }) => (
        <li key={id}>
          <TodoItem id={id} title={title} description={description} />
        </li>
      ))}
    </ul>
  );
};
