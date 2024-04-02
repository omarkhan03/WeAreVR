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
import { useHistory } from 'react-router-dom';


export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


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
    localStorage.removeItem('isLoggedIn'); // Remove the login state
    history.push('/Login');
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant='h5' style={{ cursor: 'pointer' }} onClick={() => history.push('/Home')}>
            WEAREVR
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SearchFunction barWidth={"50rem"} />
          </Typography>

          <Box sx={{ display: 'flex', mr: '1em' }}>
            <HomeIcon fontSize='large' className='iconEffect' style={{ cursor: 'pointer' }} onClick={() => history.push('/Home')} />
          </Box>
          <PersonIcon fontSize='large' className='iconEffect' id='PersonIcon' onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {isLoggedIn ? (
              <>
                <MenuItem onClick={navigateToProfile}>Profile</MenuItem>
                <MenuItem onClick={navigateToLogin}>Logout</MenuItem>
              </>
            ) : (
              <MenuItem onClick={navigateToLogin}>Login</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}