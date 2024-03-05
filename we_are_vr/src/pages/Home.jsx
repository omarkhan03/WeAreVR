import React from 'react';
import Typography from '@mui/material/Typography';
import CustomAppBar from '../components/CustomAppBar';
import WelcomeMessage from "../components/WelcomeMessage";
import { Box } from '@mui/material';
import TrendingComponent from '../components/TrendingComponent';


function Home({ setPage }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setPage('forum')}>Go to Forum</button>
      <button onClick={() => setPage('profile')}>Go to Profile</button>
      <Typography>Hello World</Typography>
      <CustomAppBar />
      <WelcomeMessage isLoggedIn={true} name={"Bobby"}/>
      <Box 
            // height={200}
            my={4}
            // display="flex"
            alignItems="center"
            justifyItems={'center'}
            gap={4}
            p={2}
            sx={{ border: '2px solid white' }}
      >
        <TrendingComponent />
      </Box>
    </div>
  );
}

export default Home