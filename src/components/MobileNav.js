import React from 'react'
import styled from 'styled-components'
import { Button, Typography, IconButton } from '@material-ui/core'
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import MyMobileNav from '../styles/mobileNavStyles'



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


const MobileNav = ({theme, setTheme, displayNavBar}) => {

    let classes;
    theme ? (classes = darkMode()) : (classes = lightMode());

   return (
        <MyMobileNav displayNavBar={displayNavBar}>
           
            <Button color="inherit" href="/">
              <Typography >Calamity Monitor</Typography>
            </Button>
            

         
           <Button color="inherit" href="/news">
              <Typography >News</Typography>
            </Button>

           

            <Button color="inherit" href="/health">
              <Typography>Health</Typography>
            </Button>


            <IconButton
              className={classes.buttonText}
              title="Toggle light/dark theme"
              aria-label="Toggle light/dark theme"
              onClick={() => setTheme()}>
              {theme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            
            </MyMobileNav>
        
   
    )
    
}

export default MobileNav