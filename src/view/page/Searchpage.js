import HomepageNavbar from "../../component/HomepageNavbar";
import { Grid, makeStyles, Paper,InputBase,Button,alpha
   } from "@material-ui/core";
import GroupedSelect from '../../component/GroupSelect'
import Footer from '../../component/Footer'
import { useEffect, useState } from 'react';
import Post from "../../component/Post";
import { Cancel, Search} from "@material-ui/icons";
import UCard1 from "../../component/Major/Ucard1";

const useStyle=makeStyles((theme)=>({
  Feed:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    [theme.breakpoints.down("sm")]: {
      flexDirection:"row",
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
    justifyContent:"center",
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
    color:"white",
    display: (props) => (props.open ? "none" : "flex"),
  },
}));

 const Searchpage=()=> {
  const [open, setOpen] = useState(true);
  const [menuopen, setMenuopen] = useState(false);
  const handleOpen = () => setMenuopen(true);
  const handleClose = () => setMenuopen(false);
  const classes=useStyle({open});
  const [SData,setSData]=useState("");
    const SetData=()=>{
      loadMData(SData)
      loadUData(SData)
    }
    const [MItems,setMItems]=useState([]);
    const [UItems,setUItems]=useState([]);
    const loadUData =(Data)=>{ 
      fetch(`http://localhost:5000/University?q=${Data}`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setUItems(data);
         // do something with data
     })
    }
    const loadMData =(Data)=>{ 
      fetch(`http://localhost:5000/Major?q=${Data}`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setMItems(data);
         // do something with data
     })
    }
    const PressClick=()=>{
      alert("You has been click");
    }
    return (
      <div>
          <div style={{background:"#05192d"}}>
                     <HomepageNavbar></HomepageNavbar>
                     <Grid container  style={{
                         padding:"50px",
                         paddingTop:"100px",
                     }}>
                         
                         <Grid item sm={12} xs={12}>
                           <GroupedSelect></GroupedSelect>
                         </Grid>
                         <Grid item sm={12} xs={12} style={{
                           paddingLeft:"10%",
                           paddingRight:"10%",
                           marginTop:"30px"
                         }}>
                              <div className={classes.search}>
                                    {/* <a href="/Searchpage" style={{color:"white"}}> 
                                    </a> */}
                                    <Button variant='text' onClick={SetData} >
                                    <Search/>
                                    </Button>
                                    <InputBase type="text" placeholder="Search..." className={classes.input} value={SData} id='Searchdata' onChange={(e)=>{
                                      setSData(e.target.value)
                                    }}/>
                                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                                </div>
                                
                         </Grid>
                     </Grid>
                     <Grid container style={{
                         padding:"50px",
                         paddingTop:"0px",
                     }}>
                         <Grid item sm={2}>
                             
                         </Grid>
                         <Grid item sm={8}>
                         </Grid>
                         <Grid item sm={2}> 
                         </Grid>
                     </Grid>
                     <Grid container>
                         <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
     
     
                                 <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
                                 <Grid style={{backgroundColor:"",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
                                 <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
                         <Grid style={{backgroundColor:"white",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         
                     </Grid>
                 </div>
                        <h3 style={{
                          width:"100%",
                          textAlign:"center"
                        }}>Major</h3>
                        <Grid item sm={12} xs={12} className={classes.Feed}>
                              {
                                MItems.map((item)=>(
                                  <UCard1 data={item}></UCard1>
                                ))
                              }
                        </Grid>
                        <h3 style={{
                          width:"100%",
                          textAlign:"center"
                        }}>University</h3>
                        <Grid item sm={12} xs={12} className={classes.Feed}>
                              {
                                UItems.map((item)=>(
                                  <Post data={item} onClick={PressClick}></Post>
                                ))
                              }
                        </Grid>
                 <Footer></Footer>
                 
      </div>
    );
  };

export default Searchpage;
