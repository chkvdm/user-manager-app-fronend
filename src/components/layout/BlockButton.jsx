import React from 'react';
import Button from '@mui/material/Button';
import BlockIcon from '@mui/icons-material/Block';
import { ThemeProvider } from '@mui/material/styles';
import handleStatusChange from '../../hooks/handleStatusChange';
import theme from '../../css/buttonColor';

const BlockButton = ({
  selectedCheckboxes,
  setSelectedCheckboxes,
  setRecords,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<BlockIcon style={{ color: 'white' }} />}
        onClick={() =>
          handleStatusChange(
            selectedCheckboxes,
            setSelectedCheckboxes,
            setRecords,
            'blocked'
          )
        }
      >
        Block
      </Button>
    </ThemeProvider>
  );
};

export default BlockButton;
