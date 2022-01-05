import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { div, Button ,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:"white"
  },
  SearchForm:{
    backgroundColor:"rgb(255,255,255,0.90)",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:"10px",
    borderRadius:"3px",
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
    }
  },
  SearchFormItem:{
    marginTop:"25px"
  }
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.SearchForm}>
          <div className={classes.SearchFormItem}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Subject 1</InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Sciences</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Social Sciences</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
          </div >
          <div className={classes.SearchFormItem}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Subject 2</InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Sciences</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Social Sciences</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
          </div>
          <div className={classes.SearchFormItem}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Subject 3</InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Sciences</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Social Sciences</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
          </div>
          <div className={classes.SearchFormItem}>
                <Button variant="contained" style={{
                    backgroundColor:"#05192d",
                    color:"white",
                    marginTop:"5px"
                  }}>
                    Submit</Button>
          </div>
      </Grid>
    </div>
  );
}
