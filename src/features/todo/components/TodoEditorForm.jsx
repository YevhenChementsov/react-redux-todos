import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
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

export const TodoEditorForm = ({
  initialValues = { title: '', description: '' },
  onSubmit,
  buttonText,
}) => {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          await onSubmit(values).unwrap();
          toast.success('To-do successfully created!');
          resetForm();
        } catch (error) {
          toast.error('Something went wrong! Please, try again.');
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
          {buttonText}
        </Button>
      </form>
    </>
  );
};
