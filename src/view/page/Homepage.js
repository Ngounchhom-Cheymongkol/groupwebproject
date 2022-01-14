import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
import FacultyCard from '../../component/FacultyCard';
import FooterStyle from '../../component/FooterStyle';
import Carousell from '../../component/Carousal';
const useStyle=makeStyles((theme)=>({
    MajorList:{
        margin:"50px",
        marginTop:"0",
        padding:"25px",
        [theme.breakpoints.down("sm")]:{
            margin:"0px",
            padding:"10px",
        }
    }
}));

const Homepage=()=>{
    const classes=useStyle();
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    <Grid item sm={1} xs={0}>
                        
                    </Grid>
                    <Grid item sm={10} xs={12}>
                       <Carousell></Carousell>
                    </Grid>
                    <Grid item sm={1} xs={0}> 
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
                            - Top Major
                    </h1>
                    <Feed></Feed>
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
                                <h1>What is KhmerHope?</h1>
                            <p>
                                KhmerHope is website for Hight school to find a good major in university.
                            </p>
                        </div>
                        
                    </Grid>
            <Footer></Footer>
       </div>
    );
}
export default Homepage;