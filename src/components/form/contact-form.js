import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { TextField, Typography, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { contactSchemaValidate } from '../../helpers/validation';

import * as styles from './contact-form.module.scss';

const CustomIcon = ({state}) => {
  switch(state.status) {
    case 'failed':
      return <ErrorOutlineIcon />;
    case 'success':
      return <CheckIcon />;
    default:
      return <AttachEmailIcon/>
  }
}

const ContactForm = () => {
  const [loadingBtn, setLoadingBtn] = useState({
    status: null,
    message: null
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: contactSchemaValidate,
    onSubmit: (values, actions) => {
      setLoadingBtn({ status: 'pending', message: null })
      axios({
        method: "POST",
        url: "/contact",
        baseURL: process.env.GATSBY_SITE_URL,
        data: values,
      })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        setLoadingBtn({status: 'success', message: 'Message sent'});
      })
      .catch(error => {
        console.log(error)
        actions.setSubmitting(false);
        setLoadingBtn({status: 'failed', message: 'Send error'})
      });
    },
  });


  
  return (
    <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
      <TextField
        className={styles.input_text}
        type="email"
        label="Email"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputProps={{
          endAdornment: (
            <InputAdornment
              className={styles.input_icon}
              position="end"
            >
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
        {...formik.getFieldProps('email')}
      />
      <TextField
        className={styles.input_text}
        type="text"
        label="Message"
        multiline
        rows={4}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        {...formik.getFieldProps("message")}
      />
      <LoadingButton
        className={styles.input_button}
        type="submit"
        variant="contained" 
        fullWidth
        endIcon={<CustomIcon state={loadingBtn} />}
        loading={loadingBtn.status === 'pending'}
        loadingPosition="end"
      >
        Send
      </LoadingButton>
      {loadingBtn.message && <Typography variant="body1" component="p" textAlign="center" color={loadingBtn.status === 'failed' ? "red" : "green"}>{loadingBtn.message}</Typography>}
    </form>
  )
}

export default ContactForm;