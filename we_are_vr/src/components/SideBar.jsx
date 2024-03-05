import * as React from "react";
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

export default function TheSideBar() {

    //New component named MyListItemIcon that takes two props: text and image
    //Inside the component, we render an img tag with the provided image path, alt text, and size.
const MyListItemIcon = ({ text, image }) => (
        <ListItemIcon>
            <img src={image} alt={text} width="24" height="24" />
        </ListItemIcon>
    );

MyListItemIcon.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
        <Typography variant="h5" margin={"1rem 0" }>
            Subscribed Forums
        </Typography>
        <Divider variant="middle" />
      <List>
        {["v/BeatSaber", "v/GorillaTag", "v/Quest3", "v/Quest2"].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate('/forum')}>
                <MyListItemIcon text={text} image="../images/vrImg.jpg" />
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div style={{ width: 250 }}>
    <Drawer variant="permanent" open anchor="left">
      {DrawerList}
    </Drawer>
    </div>
  );
}
