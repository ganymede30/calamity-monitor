import React from "react";
import { Divider, Drawer, Hidden, IconButton } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "250px";

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("xs")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  };
});

const ResponsiveDrawer = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* here goes form, when user clicks apply filters, this will call getEverything in News component. and news component will rerender 100 new news articles */}
    </div>
  );

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}>
        <FilterListIcon />
      </IconButton>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default ResponsiveDrawer;
