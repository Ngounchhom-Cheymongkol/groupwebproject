import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
const Homepage=()=>{
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    <Grid item sm={2}>
                        
                    </Grid>
                    <Grid item sm={8}>
                        <Paper>
                            <img width={"100%"} src="https://res.cloudinary.com/highereducation/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1200,h_630/v1566232749/BestColleges.com/BC-Career-Mechanical_engineering_vu3sha.jpg">
                            </img>
                        </Paper>
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
            <Feed></Feed>
                <Grid container style={{backgroundColor:"#7933ff"}} >
                        <Grid style={{backgroundColor:"#ff6ea9",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>
                        <Grid style={{backgroundColor:"#213147",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>
                        <Grid style={{backgroundColor:"#05192d",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>
                        <Grid style={{backgroundColor:"#05192d",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>
                        <Grid style={{backgroundColor:"#05192d",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>
                        <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={2} xs={2}>
                            
                        </Grid>


                                <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={2} xs={2}>
                                    
                                    </Grid>
                                    <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={2} xs={2}>
                                        
                                    </Grid>
                                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={2} xs={2}>
                                        
                                    </Grid>
                                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={2} xs={2}>
                                        
                                    </Grid>
                                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={2} xs={2}>
                                        
                                    </Grid>
                                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={2} xs={2}>
                                        
                                    </Grid>


                                    
                        <div style={{
                                diplay:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                                color:"white"
                            }}>
                                <h1>What is KhmerHope?</h1>
                            <p>
                            Learn the data skills you need online at your own pace—from non-coding essentials to data science and machine learning.
                            </p>
                        </div>
                        
                    </Grid>
            <Footer></Footer>
       </div>
    );
}
export default Homepage;