import React from 'react'
import { Link }  from 'react-router-dom'
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

} from '@material-ui/core'

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,

} from '@material-ui/icons'

const Navbar = () => {
    return (
        <Box component= "nav">
         <AppBar position= "static">
             <Toolbar>
          <Grid
            justify="space-between" 
            container 
          >
            
              <h1>Calamity Monitor</h1> 
            
             <Button style={{color: "white"}}>
               <h1>News</h1>
             </Button>
             
             <Button style={{color: "white"}}>
               <h1>Health</h1>
            
             </Button>
            
            </Grid>
          </Toolbar>
         </AppBar>
        </Box>
    )
}

export default Navbar 