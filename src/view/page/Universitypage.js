import { Grid, makeStyles } from "@material-ui/core";
import Feed from "../../component/Feed";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
import Leftbar from "../../component/Leftbar";
import Navbar from "../../component/Navbar";
import UCard from "../../component/UCard"
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
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
        <Grid item sm={10} xs={12}>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>
          <UCard Title={"Intitute Technology of Cambodia"} Type={"Engineering"} Location={"Phnom Penh ,Cambodia"} Detail={"The Institut de Technologie du Cambodge (ITC) is one of Cambodia's higher education institutions. ... It offers education and research programs in engineering."}></UCard>

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