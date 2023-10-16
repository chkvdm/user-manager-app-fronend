import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import LogoutIcon from '@mui/icons-material/Logout';
import logOut from '../../hooks/logOut';

const NavPanel = () => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <VerifiedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Typography>
          <Button color="inherit" onClick={logOut}>
            <LogoutIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavPanel;
