import React from "react";
import { Grid, AppBar, Button, Typography, Box, IconButton } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MobileNav from "./MobileNav";
import { mobile } from "../styles/mediaQueries";

const darkMode = makeStyles(() => {
  return {
    buttonText: {
      fontSize: "1.2em",
      color: "#e0e0e0"
    },
    navBar: {
      backgroundColor: "#333333",
      padding: "0 1%"
    },
    gridContainer: {
      height: "55px"
    }
  };
});

const lightMode = makeStyles(() => ({
  buttonText: {
    fontSize: "1.2em",
    color: "#fafafa"
  },
  navBar: {
    backgroundColor: "primary",
    padding: "0 1%"
  },
  gridContainer: {
    height: "55px"
  }
}));

const Navbar = ({ theme, setTheme }) => {
  let classes;
  theme ? (classes = darkMode()) : (classes = lightMode());
  const matches = useMediaQuery(mobile);

  return matches ? (
    <MobileNav theme={theme} setTheme={setTheme} />
  ) : (
    <Box component="nav">
      <AppBar position="static" className={classes.navBar}>
        <Grid
          className={classes.gridContainer}
          container
          justify="space-between"
          alignItems="center"
          direction="row">
          <Grid item>
            <Button href="/">
              <Typography className={classes.buttonText}>Calamity Monitor</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button href="/news">
              <Typography className={classes.buttonText}>News</Typography>
            </Button>
            <Button href="/health">
              <Typography className={classes.buttonText}>Health</Typography>
            </Button>
            <IconButton
              className={classes.buttonText}
              title="Toggle light/dark theme"
              aria-label="Toggle light/dark theme"
              onClick={() => setTheme()}>
              {theme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;
