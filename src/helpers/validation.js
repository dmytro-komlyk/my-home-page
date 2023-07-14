import * as yup from 'yup';

export const contactSchemaValidate = yup.object().shape({
    email: yup
      .string()
      .required('Email is a required field')
      .email('Invalid email format'),
    message: yup
      .string()
      .required('Message is a required field')
      .min(1, 'Message must be at least 1 characters'),
  });