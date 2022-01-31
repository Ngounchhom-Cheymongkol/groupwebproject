import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
import FooterStyle from '../../component/FooterStyle';
import Carousell from '../../component/Home/Carousal';
import Post from '../../component/Post';

import img1 from "./../../Asset/University/img (1).jpg";
import img2 from "./../../Asset/University/img (2).jpg";
import img3 from "./../../Asset/University/img (3).jpg";
import img4 from "./../../Asset/University/img (4).jpg";
import img5 from "./../../Asset/University/img (5).jpg";
const useStyle=makeStyles((theme)=>({
    MajorList:{
        margin:"50px",
        marginTop:"0",
        padding:"25px",
        [theme.breakpoints.down("sm")]:{
            margin:"0px",
            padding:"10px",
        }
    },
    Feed:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        [theme.breakpoints.down("sm")]: {
          flexDirection:"row",
        }
    }
}));

const Homepage=()=>{
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
    const classes=useStyle();
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container style={{
                    
                    paddingTop:"50px",
                }}>
                    <Grid item sm={12} xs={12}>
                       <Carousell></Carousell>
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
            }}>
                
            </Grid>

                <Paper className={classes.MajorList}>
                    <h1 style={{
                            marginLeft:"15%"
                        }}>
                            - Top University
                    </h1>
                        <div className={classes.Feed}>
                                        {
                                Items.map((item)=>(
                                <Post img={item.img} title={item.title}></Post>
                                ))
                            }
                        </div>
                </Paper>


            {/* Design Footer  */}
                <Grid container style={{backgroundColor:"#7933ff"}} >
                        <FooterStyle></FooterStyle>


                                    
                        <div style={{
                                diplay:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                                color:"white"
                            }}>
                                <h1>What is CCI?</h1>
                            <p>
                                CCI stand for Cambodia College, is a website for Hight shcool student, is a website for hight school students that are just graduate could be able to consider the right major in university.
                            </p>
                        </div>
                        
                    </Grid>
            <Footer></Footer>
       </div>
    );
}
export default Homepage;