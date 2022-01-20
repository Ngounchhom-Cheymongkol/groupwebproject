import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
import Post from "../../component/Post";
import UCard from "../../component/University/UCard"
import UCard1 from "../../component/University/Ucard1";

import img1 from "./../../Asset/University/img (1).jpg";
import img2 from "./../../Asset/University/img (2).jpg";
import img3 from "./../../Asset/University/img (3).jpg";
import img4 from "./../../Asset/University/img (4).jpg";
import img5 from "./../../Asset/University/img (5).jpg";


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
  {
    img:"",
    Title:"ITC",
    Type:"Engineering",
    ULocation:"Phnom Penh, Cambodia",
    Decrition:"Kigndom of cambodia nation religion king"
  }
]

const Universitypage = () => {
    const Items=[
              
                    {
                        title:"AUPP" ,
                        img:img1
                    },
                    {
                        title:"NPIC",
                        img:img2
                    },
                    {
                        title:"RUPP",
                        img:img3
                    },
                    {
                        title:"UHS",
                        img:img4
                    },
                    {
                        title:"Norton",
                        img:img5
                    }
                ]
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
                   <Post img={item.img} title={item.title}></Post>
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