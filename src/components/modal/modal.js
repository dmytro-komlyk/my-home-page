import * as React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';
import * as styles from './modal.module.scss';

const Modal = ({ children, isOpen, handleClose }) => (
  <MuiModal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className={styles.modalContainer}>
      {children}
    </Box>
  </MuiModal>
);

export default Modal