import FilterListIcon from "@material-ui/icons/FilterList";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  makeStyles
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dialogTitle: {
    paddingBottom: 0
  }
}));

const DialogSelect = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        <FilterListIcon />
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialogTitle}>Filter by: </DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Country</InputLabel>
              <Select
                name="country"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                onChange={e => setCountry(e.target.value)}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="ch">China</MenuItem>
                <MenuItem value="fr">France</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
              <Select
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={e => setCategory(e.target.value)}>
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
