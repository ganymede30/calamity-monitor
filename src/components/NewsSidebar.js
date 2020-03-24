// import React from "react";
// import { Divider, Drawer, Hidden, IconButton } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
// import { makeStyles } from "@material-ui/core/styles";

// const drawerWidth = "250px";

// const useStyles = makeStyles(theme => {
//   console.log(theme);
//   return {
//     root: {
//       display: "flex"
//     },
//     drawer: {
//       [theme.breakpoints.up("xs")]: {
//         width: drawerWidth,
//         flexShrink: 0
//       }
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3)
//     }
//   };
// });

// const ResponsiveDrawer = () => {
//   const classes = useStyles();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       {/* here goes form, when user clicks apply filters, this will call getEverything in News component. and news component will rerender 100 new news articles */}
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         onClick={handleDrawerToggle}
//         className={classes.menuButton}>
//         <FilterListIcon />
//       </IconButton>
//       <Hidden smUp implementation="css">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           ModalProps={{
//             keepMounted: true // Better open performance on mobile.
//           }}>
//           {drawer}
//         </Drawer>
//       </Hidden>
//     </div>
//   );
// };

// export default ResponsiveDrawer;

import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core/";

class DialogSelect extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      country: "",
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <FilterListIcon />
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}>
          <DialogTitle style={{ paddingBottom: 0 }}>Filter by: </DialogTitle>
          <DialogContent>
            <form style={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl style={{ margin: 20, minWidth: 120 }}>
                <InputLabel htmlFor="demo-dialog-native">Country</InputLabel>
                <Select
                  name="country"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.country}
                  onChange={this.handleChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="ch">China</MenuItem>
                  <MenuItem value="fr">France</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ margin: 20, minWidth: 120 }}>
                <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
                <Select
                  name="category"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.category}
                  onChange={this.handleChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="technology">Tech</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="health">Health</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default DialogSelect;
