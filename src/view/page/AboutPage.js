import { Container, makeStyles,Grid, Paper } from "@material-ui/core";
import { Facebook, Web, YouTube } from "@material-ui/icons";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Aboutpage = () => {
  const classes = useStyles();
  return (
       <div>
           <HomepageNavbar></HomepageNavbar>
           <Grid container style={{
           marginTop:"100px",
       }}>
           <Grid item sm={1} xs={0}>
               
           </Grid>
           <Grid item sm={10} xs={12} style={{
                background:"white",
                borderRadius:"5px"
                }}>
                        {/* Major Title */}
                    <h1   style={{
                            
                            color:"#05192d",
                            width:"100%",
                            textAlign:"center"
                        }}>
                            ABOUT US
                    </h1>
                            {/* Major image */}
                    <Paper style={{padding:"5%"}}>
                                <img style={{
                                    width:"100%",
                                    }} 
                                        src="https://www.swedenabroad.se/globalassets/ambassader/kambodja-phnom-penh/images/rupp.jpg"
                                ></img>
                    </Paper>
                    {/* What is major? */}
                    <Paper style={{padding:"5%"}} >
                       
                    <h1   style={{
                            marginTop:"50px",
                            color:"#05192d",
                            width:"100%",
                            textAlign:"center"
                        }}>
                            OUR STORY
                    </h1>
                    <p>
                        We are student of Department Infomation Engineering in Royal University of phnom penh.The Royal University of Phnom Penh (RUPP; Khmer: សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ; French: Université royale de Phnom Penh) is a national research university of Cambodia, located in the Phnom Penh capital. Established in 1960, it is the country's largest university. It hosts around 20,000 students in undergraduate and postgraduate programmes. It offers degrees in fields such as sciences, humanities and social sciences, engineering as well as vocational courses in fields such as information technology, electronics, psychology and tourism. RUPP provides Cambodia's foremost degree-level language programmes through the Institute of Foreign Languages. RUPP has full membership in the ASEAN University Network (AUN).

RUPP has over 420 full-time staff. All of its 294 academic staff hold tertiary qualifications, including 24 PhDs and 132 Master's degrees. They are supported by 140 administrative and maintenance staff. The university maintains linkage networks with Cambodian and international NGOs, universities and government ministries. As a result, international and non-government organisations and government offices regularly contribute adjunct faculty members to help expand RUPP's capacity.
                    </p>
                        
                    </Paper>
                    
           </Grid>
           <Grid item sm={1} xs={0}>
               
           </Grid>
       </Grid>
       <FooterStyle></FooterStyle>
       <Footer></Footer>
       </div>
  );
};

export default Aboutpage;
