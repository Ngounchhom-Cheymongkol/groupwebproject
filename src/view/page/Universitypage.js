import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
import Post from "../../component/Post";
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Feed:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    [theme.breakpoints.down("sm")]: {
      flexDirection:"row",
    },
  }
}));
const dataitem=[
]

const Universitypage = () => {
  var i=0;
  const [Items,setItems]=useState([]);
    useEffect(()=>{
     loadData();
    },[])
    const loadData =()=>{ 
      fetch("http://localhost:5000/University", {
        
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setItems(data);
         // do something with data
     })
    }
  // alert(Items);
  const classes = useStyles();
  return (
    <div>
      <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container  style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    
                    <Grid item sm={12} xs={12}>
                        <h1
                        style={{
                            color:"white",
                            width:"100%",
                            textAlign:"center",
                        }}>
                            List of University
                        </h1>
                    </Grid>
                </Grid>
                <Grid container style={{
                    // padding:"50px",
                }}>
                    <Grid item sm={2}>
                        
                    </Grid>
                    <Grid item sm={8}>
                    </Grid>
                    <Grid item sm={2}> 
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>


                            <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>


                    <Grid style={{backgroundColor:"white",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>

                </Grid>
            </div>
      <Grid container style={{
                    paddingTop:"",
                    backgroundColor:"white"
                }}>
        <Grid item sm={1} xs={0}>
        </Grid>
        <Grid item sm={10} xs={12} className={classes.Feed}>
               {
                 Items.map((item)=>(
                   <Post data={item}></Post>
                 ))
               }
        </Grid>
        <Grid item sm={1} xs={0}>
          
        </Grid>
      </Grid>
        <FooterStyle></FooterStyle>
        <Footer></Footer>
    </div>
  );
};
export default Universitypage;