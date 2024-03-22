import { useState } from 'react';

import { useAddTodoMutation } from 'features/todo/todoSlice';

export const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

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
    </>
  );
};
