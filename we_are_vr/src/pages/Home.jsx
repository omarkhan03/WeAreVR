import React from "react";
import Typography from "@mui/material/Typography";
import CustomAppBar from "../components/CustomAppBar";
import WelcomeMessage from "../components/WelcomeMessage";
import { Box } from "@mui/material";
import TrendingComponent from "../components/TrendingComponent";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          background: "inherit",
        }}
      >
        <SideBar showSearch={0}/>
        <div>
          <CustomAppBar />
          <WelcomeMessage isLoggedIn={true} name={"Aryan"} />
          <Box
            // height={200}
            my={4}
            // display="flex"
            alignItems="center"
            justifyItems={"center"}
            gap={4}
            p={2}
            sx={{ border: "2px solid white", margin: "0 2rem" }}
          >
            <TrendingComponent />
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Home;
