import React from "react";
import { Grid, AppBar, Toolbar, Button, Typography, Box, IconButton } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { color } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  color: {
    color: "#fff"
  },
  buttonText: {
    fontSize: "1.2em",
    color: "#fff"
  }
}));

const Navbar = ({ theme, setTheme }) => {
  const classes = useStyles();
  return (
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="flex-start" direction="row">
            <Button href="/">
              <Typography className={classes.buttonText}>Calamity Monitor</Typography>
            </Button>
          </Grid>

          <Grid container justify="flex-end" direction="row">
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
