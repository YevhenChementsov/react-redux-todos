import { Button, TextField } from '@mui/material';
import { useAddTodoMutation } from 'features/todo/todoSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup
    .string()
    .min(1)
    .max(50)
    .trim()
    .required('To-do title is required!'),
  description: yup.string().trim(),
});

const initialValues = {
  title: '',
  description: '',
};

export const AddTodoForm = () => {
  const [addTodo] = useAddTodoMutation();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          await addTodo(values).unwrap();
          resetForm();
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          autoFocus
          id="title"
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <TextField
          id="description"
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
        <Button type="submit" variant="contained">
          Add to-do
        </Button>
      </form>
    </>
  );
};
