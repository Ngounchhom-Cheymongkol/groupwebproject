import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
import GroupedSelect from '../../component/GroupSelect';
import FooterStyle from '../../component/FooterStyle';
const Majorpage=()=>{
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container  style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    
                    <Grid item sm={12} xs={12}>
                        <h1>Major</h1>
                    </Grid>
                </Grid>
                <Grid container style={{
                    padding:"50px",
                    paddingTop:"100px",
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
            <Feed></Feed>
            <FooterStyle></FooterStyle>
            <Footer></Footer>
       </div>
    );
}
export default Majorpage;