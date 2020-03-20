import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  Button,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";

import { ArrowBack, AssignmentInd, Home, Apps } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <h1>Calamity Monitor</h1>
        </Toolbar>
        <Button href="/news" style={{ color: "white" }}>
          News
        </Button>
        <Button style={{ color: "white" }}>Health</Button>
      </AppBar>
    </Box>
  );
};

export default Navbar;
