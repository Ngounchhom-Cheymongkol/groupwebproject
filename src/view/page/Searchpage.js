import HomepageNavbar from "../../component/HomepageNavbar";
import { Grid, makeStyles, Paper,InputBase,Button,alpha
   } from "@material-ui/core";
import Footer from '../../component/Footer'
import { useEffect, useState } from 'react';
import Post from "../../component/Post";
import { Cancel, Search} from "@material-ui/icons";
import UCard1 from "../../component/Major/Ucard1";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    const [S1Items,setS1Items]=useState([]);
    const [S2Items,setS2Items]=useState([]);
    const [S3Items,setS3Items]=useState([]);
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
      fetch(`http://localhost:5000/Major?q=${Data}&attr=Name,etc`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setMItems(data);
         // do something with data
     })
    }
    const loadSData =(Data,Data1,Data2)=>{ 
      fetch(`http://localhost:5000/Major?q=${Data}&attr=SubjectRequire,etc`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setS1Items(data);
         // do something with data
     })
     fetch(`http://localhost:5000/Major?q=${Data1}&attr=SubjectRequire,etc`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setS2Items(data);
         // do something with data
     })
     fetch(`http://localhost:5000/Major?q=${Data2}&attr=SubjectRequire,etc`, {
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setS2Items(data);
         // do something with data
     })
    }
    const PressClick=()=>{
      
    }

    //Variable of Group selection For Search major by 
    const Science=[
      "Math",
      "Physic",
      "Biology",
      "Chemistry",
    ]
    const SocailScience=[
      "Khmer Literature",
      "Geography", 
      "History",
      "Earth Science"
    ]
    const Language=[
      "English",
      "Franch"
    ]
    const [SubData1,setSubData1]=useState("");
    const [SubData2,setSubData2]=useState("");
    const [SubData3,setSubData3]=useState("");
    const BtnSubmit=()=>{
      loadSData(SubData1,SubData2,SubData3);
      setUItems([]);
      setMItems([]);
    }
    const handleChange = e => setSubData1(e.target.value);
    return (
      <div>
          <div style={{background:"#05192d"}}>
                     <HomepageNavbar></HomepageNavbar>
                     <Grid container  style={{
                         padding:"50px",
                         paddingTop:"100px",
                     }}>
                         <Grid item sm={12} xs={12}>
                         <Grid container className={classes.SearchForm}>
                                <div className={classes.SearchFormItem}>
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="grouped-select"  >Subject 1</InputLabel>
                                      <Select defaultValue="" id="grouped-select" onChange={(e)=>{
                                        setSubData1(e.target.value);
                                      }}>
                                        <MenuItem >
                                          <em>None</em>
                                        </MenuItem>
                                        <ListSubheader>Sciences</ListSubheader>
                                        {
                                          Science.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))
                                        }
                                        <ListSubheader>Social Sciences</ListSubheader>
                                        {SocailScience.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))}
                                      </Select>
                                    </FormControl>
                                </div >
                                <div className={classes.SearchFormItem}>
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="grouped-select">Subject 2</InputLabel>
                                      <Select defaultValue="" id="grouped-select" onChange={(e)=>{
                                        setSubData2(e.target.value);
                                      }}>
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <ListSubheader>Sciences</ListSubheader>
                                        {
                                          Science.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))
                                        }
                                        <ListSubheader>Social Sciences</ListSubheader>
                                        {SocailScience.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))}
                                      </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.SearchFormItem}>
                                    <FormControl className={classes.formControl}>
                                      <InputLabel htmlFor="grouped-select">Subject 3</InputLabel>
                                      <Select defaultValue="" id="grouped-select" onChange={(e)=>{
                                        setSubData3(e.target.value);
                                      }}>
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <ListSubheader>Sciences</ListSubheader>
                                        {
                                          Science.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))
                                        }
                                        <ListSubheader>Social Sciences</ListSubheader>
                                        {SocailScience.map((item,id)=>(
                                            <MenuItem value={item}>{item}</MenuItem>
                                          ))}
                                      </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.SearchFormItem}>
                                      <Button variant="contained" style={{
                                          backgroundColor:"#05192d",
                                          color:"white",
                                          marginTop:"5px"
                                        }} onClick={BtnSubmit}>
                                          Submit</Button>
                                </div>
                            </Grid>
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
                              {
                                S1Items.map((item)=>(
                                  <UCard1 data={item}></UCard1>
                                ))
                              }
                              {
                                S2Items.map((item)=>(
                                  <UCard1 data={item}></UCard1>
                                ))
                              }{
                                S3Items.map((item)=>(
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
                                  <Post data={item}></Post>
                                ))
                              }
                        </Grid>
                 <Footer></Footer>
                 
      </div>
    );
  };

export default Searchpage;
