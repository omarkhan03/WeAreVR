import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import SearchSubcriptions from "./searchFunctions/SearchSubcriptions";
import { useHistory } from 'react-router-dom';
import subscribedForums from "../Data/SubscribedForums"
import handleForumClick from '../utils/ForumNavigation';


export default function TheSideBar() {
  const history = useHistory();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [getSubscribedForums, setGetSubscribedForums] = useState(JSON.parse(localStorage.getItem('SubscribedForums')) || subscribedForums);


  //New component named MyListItemIcon that takes two props: text and image
  //Inside the component, we render an img tag with the provided image path, alt text, and size.
  const MyListItemIcon = ({ text, image }) => (
    <ListItemIcon>
      <img src={image} alt={text} width="30" height="30" />
    </ListItemIcon>
  );

  MyListItemIcon.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  const DrawerList = (
    <Box sx={{
      width: 250,
    }} role="presentation">
      <Typography variant="h5" margin={"1rem 0"}>
      Joined Forums
      </Typography>
      <Divider variant="middle" />
      {
        isLoggedIn ? (
          <><SearchSubcriptions barWidth="13rem" /><List>
            {getSubscribedForums.map((forum) => (
              <ListItem key={forum.id} disablePadding>
                  <ListItemButton onClick={() => handleForumClick(forum.name, history)}>
                  <MyListItemIcon text={forum.name} image={forum.imageUrl} />
                  <ListItemText >
                    <Typography sx={{fontSize:'1.3rem'}}>{forum.name}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List></>
        ) : ( //else user is not logged in so show login button
          <Typography variant="h6"><a style={{ text_Decoration: 'none', color: 'red', textDecoration: 'underline' }} href="/login" >Login</a> to view your Joined Forums</Typography>
        )
      }
    </Box >
  );
  return (
    <div style={{ width: 250 }}>
      <Drawer variant="permanent" open anchor="left"
        PaperProps={{
          sx: { backgroundColor: 'grey' }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
