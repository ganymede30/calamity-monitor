import React from "react";
import { Grid, AppBar, Button, Typography, Box, IconButton } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const darkMode = makeStyles(() => {
  return {
    buttonText: {
      fontSize: "1.2em",
      color: "#e0e0e0"
    },
    navBar: {
      backgroundColor: "#333333"
    },
    gridContainer: {
      height: "65px"
    }
  };
});

const lightMode = makeStyles(() => ({
  buttonText: {
    fontSize: "1.2em",
    color: "#fafafa"
  },
  navBar: {
    backgroundColor: "primary"
  },
  gridContainer: {
    height: "65px"
  }
}));

const Navbar = ({ theme, setTheme }) => {
  let classes;
  theme ? (classes = darkMode()) : (classes = lightMode());
  return (
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
