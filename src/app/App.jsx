import { Container } from '@mui/material';
import { Todo } from 'features/todo/Todo';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Todo />
    </Container>
  );
};
