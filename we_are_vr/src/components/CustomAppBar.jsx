import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchFunction from './SearchFunction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import './AppBar.css';
import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';


export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigateToProfile = () => {
    window.location.href = "/profile"
    handleMenuClose();
  };

  const navigateToLogin = () => {
    window.location.href = "/Login"
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <a href="/Home" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Typography  variant='h5'>WEAREVR</Typography>
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SearchFunction barWidth={"50rem"}/>
          </Typography>

          <Box sx={{ display: 'flex', mr: '1em' }}>
          <a href="/Home" style={{ color: 'inherit', textDecoration: 'none' }}>
            <HomeIcon fontSize='large'className='iconEffect'/>
          </a>
          </Box>
          <PersonIcon  fontSize='large' className='iconEffect' id='PersonIcon' onClick={handleMenuOpen}/>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
        <MenuItem onClick={navigateToLogin}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}