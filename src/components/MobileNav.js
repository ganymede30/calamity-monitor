import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button, IconButton, Grid, Typography, AppBar, Box } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

const darkMode = makeStyles(() => {
  return {
    buttonText: {
      fontSize: "1.2em",
      color: "#e0e0e0"
    },
    navBar: {
      backgroundColor: "#333333"
    },
    list: {
      width: "40vw"
    },
    drawer: {
      fontSize: "1.2em",
      color: "#e0e0e0"
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
  list: {
    width: "40vw"
  },
  drawer: {
    fontSize: "1.2em",
    color: "#333333"
  }
}));

const MobileNav = ({ theme, setTheme }) => {
  let classes;
  theme ? (classes = darkMode()) : (classes = lightMode());
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Grid
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.list}
      container
      alignItems="center"
      direction="column">
      <Grid item>
        <Button href="/news">
          <Typography className={classes.drawer}>News</Typography>
        </Button>
      </Grid>

      <Grid item>
        <Button href="/health">
          <Typography className={classes.drawer}>Health</Typography>
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          className={classes.drawer}
          title="Toggle light/dark theme"
          aria-label="Toggle light/dark theme"
          onClick={() => setTheme()}>
          {theme ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.navBar}>
          <Grid container justify="space-between" alignItems="center" direction="row">
            <Grid item>
              <Button href="/">
                <Typography className={classes.buttonText}>Calamity Monitor</Typography>
              </Button>
            </Grid>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              classes={{ paper: classes.navBar }}
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </Grid>
        </AppBar>
      </Box>
    </>
  );
};

export default MobileNav;
