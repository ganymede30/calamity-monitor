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
import { getTopHeadlines } from "../services/apiFuncs";

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

const DialogSelect = ({ setNews }) => {
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
                <MenuItem value="ar">Argentina</MenuItem>
                <MenuItem value="at">Austria</MenuItem>
                <MenuItem value="au">Australia</MenuItem>
                <MenuItem value="be">Belgium</MenuItem>
                <MenuItem value="ca">Canada</MenuItem>
                <MenuItem value="ch">Switzerland</MenuItem>
                <MenuItem value="co">Colombia</MenuItem>
                <MenuItem value="cu">Cuba</MenuItem>
                <MenuItem value="de">Germany</MenuItem>
                <MenuItem value="fr">France</MenuItem>
                <MenuItem value="gb">Great Britain</MenuItem>
                <MenuItem value="ie">Ireland</MenuItem>
                <MenuItem value="in">India</MenuItem>
                <MenuItem value="it">Italy</MenuItem>
                <MenuItem value="ma">Morocco</MenuItem>
                <MenuItem value="mx">Mexico</MenuItem>
                <MenuItem value="my">Malasia</MenuItem>
                <MenuItem value="ng">Nigeria</MenuItem>
                <MenuItem value="nl">Netherlands</MenuItem>
                <MenuItem value="no">Norway</MenuItem>
                <MenuItem value="nz">New Zealand</MenuItem>
                <MenuItem value="ph">Philippines</MenuItem>
                <MenuItem value="ro">Romania</MenuItem>
                <MenuItem value="sa">Saudi Arabia</MenuItem>
                <MenuItem value="se">Sweden</MenuItem>
                <MenuItem value="sg">Singapore</MenuItem>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="ve">Venezuela</MenuItem>
                <MenuItem value="za">South Africa</MenuItem>
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
                  <em>General</em>
                </MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="technology">Tech</MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
                <MenuItem value="science">Science</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              getTopHeadlines(country, category).then(articles => setNews(articles));
            }}
            color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogSelect;
