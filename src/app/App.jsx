import { Container } from '@mui/material';
import { TodoList } from 'features/todo/components';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <TodoList />
    </Container>
  );
};
