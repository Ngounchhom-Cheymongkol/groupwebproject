import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
import FacultyCard from '../../component/FacultyCard';
import FooterStyle from '../../component/FooterStyle';
import Carousell from '../../component/Carousal';
const Homepage=()=>{
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    <Grid item sm={2} xs={0}>
                        
                    </Grid>
                    <Grid item sm={8} xs={12}>
                       <Carousell></Carousell>
                    </Grid>
                    <Grid item sm={2} xs={0}> 
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
                marginTop:"30px"
            }}>
                <Grid item sm={4} style={{padding:"15px"}}>
                        <FacultyCard>
                        </FacultyCard>
                </Grid>
                <Grid item sm={4} style={{padding:"15px"}}>
                        <FacultyCard>
                            </FacultyCard>
                </Grid>
                <Grid item sm={4} style={{padding:"15px"}}>
                        <FacultyCard>
                            </FacultyCard>
                </Grid>
            </Grid>

            <h1>Major</h1>
            <Feed></Feed>


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