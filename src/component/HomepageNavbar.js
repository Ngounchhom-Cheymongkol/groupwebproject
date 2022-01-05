import * as React from 'react';

import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
    Button,
    Box,
    Modal
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search,MenuBookOutlined, MenuRounded } from "@material-ui/icons";
  import { useState } from "react";
  
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "block",
      [theme.breakpoints.down("sm")]: {
        display: "none",
        color:"white"
      },
    },
    logoSm: {
        display: "none",
      [theme.breakpoints.down("sm")]: {
        width:"100%",
        display: "flex",
        justifyContent:"space-around",
        color:"white",
        padding:"20px"
      },
    },
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
    Btnitem:{
      color:"white",
    },
    language:{
        display: (props) => (props.open ? "none" : "flex"),
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "none" : "flex"),
        width: "50%",
      },
    },
    BtnMenu:{
        color:"white",
        display:"none",
        [theme.breakpoints.down("sm")]:{
            display: "flex",
        }
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
        marginTop:"30px"
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
  const HomepageNavbar = () => {
    const [open, setOpen] = useState(false);
    const [menuopen, setMenuopen] = React.useState(false);
    const handleOpen = () => setMenuopen(true);
    const handleClose = () => setMenuopen(false);
    const classes = useStyles({ open });
    return (
      <AppBar position="fixed" style={{backgroundColor:"#05192d"}}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            KhmerHope
          </Typography>
          <Button className={classes.BtnMenu} onClick={handleOpen}>
              <MenuRounded></MenuRounded>
          </Button>
          <Modal
                open={menuopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Typography className={classes.logoSm}>
                KhmerHope
                <Cancel onClick={handleClose}></Cancel>
                </Typography>
                    <Button className={classes.Sitem}>
                        Home
                    </Button>
                    <Button className={classes.Sitem}>
                        Major
                    </Button>
                    <Button className={classes.Sitem}>
                        University
                    </Button>
                    <Button className={classes.Sitem}>
                        About
                    </Button>
                    <Button className={classes.Sitem}>
                        Feedback
                    </Button>
                </Box>
            </Modal>
          <div className={classes.BtnGroup}>
              <Button className={classes.item}>
                  Home
              </Button>
              <Button className={classes.item}>
                  Major
              </Button>
              <Button className={classes.item}>
                  University
              </Button>
              <Button className={classes.item}>
                  About
              </Button>
              <Button className={classes.item}>
                  Feedback
              </Button>
          </div>
           <div style={{
               display:"flex",
               flexDirection:"row",
            //    width:"100%"
            }}>
            <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search
                    className={classes.searchButton}
                    onClick={() => setOpen(true)}
                    />
                </div>
                <div className={classes.language}>
                    <Button className={classes.Btnitem}>ENG</Button>|
                    <Button className={classes.Btnitem}>ខ្មែរ</Button>
                </div>
           </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default HomepageNavbar;
  