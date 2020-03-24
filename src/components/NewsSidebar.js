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

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const DialogSelect = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [countries, setCountries] = useState("");

  const handleChange = e => {
    setCountries(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FilterListIcon />
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Select Countr</InputLabel>
              <Select
                native
                value={countries}
                onChange={handleChange}
                // input={<Input id="demo-dialog-native" />}>
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="fr">France</MenuItem>
                <MenuItem value="ch">China</MenuItem>
              </Select>
            </FormControl>
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">countries</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={countries}
                onChange={handleChange}
                input={<Input />}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogSelect;
