import React, { useState } from "react";
import { Grid, AppBar, Button, Typography, Box, IconButton} from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components"
import { mobile, tablet } from "../styles/mediaQueries"
import myIcon from "../images/myIcon.svg"



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

const MyIcon = styled.button`
    background: transparent;
    height: 10vh;
    width: 10vh;
    border: none;
    display: none;
    
    ${mobile}: {
       display: block;
    }
    
`

const MyDesktopNav = styled.div`
    ${mobile}: {
      display: none;
    } 
`


const DesktopNav = ({ theme, setTheme }) => {
   let classes;
  theme ? (classes = darkMode()) : (classes = lightMode());

  return (
    //   <Box component="nav">
   <MyDesktopNav>
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
        <Button className={classes.buttonText}href="/news">
              <Typography className={classes.buttonText}>News</Typography>
            </Button>

           

            <Button className={classes.buttonText}href="/health">
              <Typography className={classes.buttonText}>Health</Typography>
            </Button>

         

            <IconButton
              className={classes.buttonText}
              title="Toggle light/dark theme"
              aria-label="Toggle light/dark theme"
              onClick={() => setTheme()}>
              {theme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

         
            <MyIcon >
                <Button>
                    <img src={myIcon} alt="icon"/>
                    
                    
                    
                </Button>
            </MyIcon>

           

       </Grid>  
        </Grid>
      </AppBar>
      </MyDesktopNav>
  );
};


export default DesktopNav