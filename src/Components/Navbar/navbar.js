import React, { useState } from "react";
import "../../Styles/navbar.scss";
import {
  AppBar,
  Avatar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DrawerComp from "../Drawer/drawercomp";

const Navbar = () => {
  const Pages = ["Home", "About", "Pages", "Property", "Contact"];
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div>
      <AppBar class="navbar">
        <Toolbar className="toolbar">
          <Typography className="heading">
            {/* <img className="img" src=" https://stevens-tate.com/wp-content/uploads/real-estate-marketing-1030x687.jpg"  alt=""/> */}
            <Avatar alt="Remy Sharp" src="https://stevens-tate.com/wp-content/uploads/real-estate-marketing-1030x687.jpg" />
            MAKAAN
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
              >
                {Pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button className="button" variant="contained">
                ADD PROPERTY
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
