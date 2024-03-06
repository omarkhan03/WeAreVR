import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchFunction from './SearchFunction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

            <Typography >WEAREVR</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <SearchFunction barWidth={"50rem"}/>
          </Typography>

          <Box sx={{ display: 'flex', mr: '1em' }}>
          <HomeIcon fontSize='large'/>

          </Box>
          <PersonIcon  fontSize='large'/>

        </Toolbar>
      </AppBar>
    </Box>
  );
}