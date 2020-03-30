import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components'
import { Box, Button, Typography, IconButton, Drawer, 
  AppBar, Toolbar, 
 } from '@material-ui/core'
 import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Brightness4, Brightness7 } from "@material-ui/icons";



const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

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


const MobileNav = ({ menu, theme, setTheme }) => {
    let classes;
    theme ? (classes = darkMode()) : (classes = lightMode());
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

   return (
   

    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
      <Button color="inherit" href="/">
              <Typography >Calamity Monitor</Typography>
            </Button>
        
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
           
   
        <Drawer
       
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
         >
      
      <div className={classes.drawerHeader}
           
      >
          <IconButton onClick={handleDrawerClose}>
            {/* {menu.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
          </IconButton>
          </div>

         
           <Button color="inherit" href="/news">
              <Typography >News</Typography>
            </Button>

           

            <Button color="inherit" href="/health">
              <Typography>Health</Typography>
            </Button>


            <IconButton
              color="default"
              className={classes.buttonText}
              title="Toggle light/dark theme"
              aria-label="Toggle light/dark theme"
              onClick={() => setTheme()}>
              {theme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
       </Drawer>    
        
        </div>
        
   
    )
    
}

export default MobileNav