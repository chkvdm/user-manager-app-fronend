import React from 'react';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { ThemeProvider } from '@mui/material/styles';
import handleStatusChange from '../../hooks/handleStatusChange';
import theme from '../../css/buttonColor';

const UnblockButton = ({
  selectedCheckboxes,
  setSelectedCheckboxes,
  setRecords,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddTaskIcon style={{ color: 'white' }} />}
        onClick={() =>
          handleStatusChange(
            selectedCheckboxes,
            setSelectedCheckboxes,
            setRecords,
            'active'
          )
        }
      >
        Unblock
      </Button>
    </ThemeProvider>
  );
};

export default UnblockButton;
