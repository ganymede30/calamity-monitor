import React from "react";


import {
  Grid,
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
        <Box component= "nav">
         <AppBar position= "static">
             <Toolbar>

            <Grid container alignItems= "flex-start" direction= "row">
             <h2>Calamity Monitor</h2>
          </Grid>
             
          
          <Grid
            container
            alignItems= "flex-start"
            justify="flex-end" 
            direction= "row">
            
              

              
            
             <Button href="/news" style={{color: "white"}}>
              <Typography>News</Typography> 
             </Button>
             
             <Button href= "/health" style={{color: "white"}}>
              <Typography>Health</Typography> 
            
             </Button>

            
            
            </Grid>
          </Toolbar>
         </AppBar>
        </Box>
    )
}

export default Navbar;
