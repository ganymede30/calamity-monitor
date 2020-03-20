import React from "react";

// import { withStyles } from 'material-ui/styles'

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


// const styles = {
//   // This group of buttons will be aligned to the right
//   news: {
//     marginLeft: 'auto',
//     marginRight: -12,
//   },
//   health: {
//     marginRight: 16,
//     marginLeft: -12,
//   },
// };

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
             
             <Button style={{color: "white"}}>
              <Typography>Health</Typography> 
            
             </Button>

            
            
            </Grid>
          </Toolbar>
         </AppBar>
        </Box>
    )
}

export default Navbar;
