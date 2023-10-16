import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import handleDelete from '../../hooks/handleDelete';
import theme from '../../css/buttonColor';

const DeleteButton = ({ selectedCheckboxes, setRecords }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteForeverIcon style={{ color: 'white' }} />}
        onClick={() => handleDelete(selectedCheckboxes, setRecords)}
      >
        Delete
      </Button>
    </ThemeProvider>
  );
};

export default DeleteButton;
