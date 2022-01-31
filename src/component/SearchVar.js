import React, { useContext } from 'react';
import { Cancel, Mail, Notifications, Search,MenuBookOutlined, MenuRounded } from "@material-ui/icons";
  import { useState } from "react";
import {  alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
    Button,
    Box,
    Modal } from '@material-ui/core';
import { SearchContext } from '../contexts/SearchContext';
const useStyles = makeStyles((theme) => ({
    
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "100%",
      display: (props) => (props.open ? "flex" : "none"),
      justifyContent:"space-between",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent:"space-between"
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(1),
      width:"90%"
    },
    cancel: {
      marginRight:"0px",
    },
    searchButton: {
      marginRight: theme.spacing(2),
    },
    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
    
    BtnGroup:{
        display:"flex",
        [theme.breakpoints.down("sm")]:{
            display:(props) => (props.btnmenu ? "flex" : "none"),
             flexDirection:"column"
        }
    },
    item: {
        color:"white",
        display: "flex",
        fontFamily:"'Kantumruy', sans-serif",
        [theme.breakpoints.up("sm")]: {
          cursor: "pointer",
        },
        "&:hover":{
          color:"white",
          backgroundColor:"rgb(255,255,255,0.25)"
        },
      },
      Sitem:{
        color:"white",
        marginTop:"30px",
        fontFamily:"'Kantumruy', sans-serif"
      }
  }));
  const style = {
    width: "99%",
    height:"100vh",
    bgcolor: '#05192d',
    border: '2px solid #000',
    display:"flex",
    flexDirection:"column",
    p:0,
  };
  const Click=()=>{
      alert("Kingdom of cambodia");
  }
const SearchVar=()=>{
    const {SearchVar,setSearchVar}=useContext(SearchContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    return(
        <>
        <div className={classes.search}>
                    {/* <a href="/Searchpage" style={{color:"white"}}>
                    
                    </a> */}
                    <Search/>
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search
                    className={classes.searchButton}
                    onClick={()=>setOpen(true)}
                    />
                </div>
        </>
    );
};
export default SearchVar;