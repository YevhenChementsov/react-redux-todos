import { Box, Button, Modal } from '@mui/material';
import { useAddTodoMutation, useGetTodosQuery } from 'features/todo/todoSlice';
import { useModal } from 'hooks/useModal';
import { TodoEditorForm, TodoItem } from '.';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TodoList = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data: todos } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={style}>
          <TodoEditorForm onSubmit={addTodo} buttonText={'Add to-do'} />
        </Box>
      </Modal>
      <ul>
        {todos?.map(({ id, title, description }) => (
          <TodoItem key={id} id={id} title={title} description={description} />
        ))}
      </ul>
    </>
  );
};
