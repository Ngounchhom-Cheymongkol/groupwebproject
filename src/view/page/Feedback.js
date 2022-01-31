import { Grid } from "@material-ui/core";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
import Ucard from "../../component/University/UCard";
import Commentbox from '../../component/Feedback/Commentbox'
import Ratebox from "../../component/Feedback/Ratebxo";
const Feedback=()=>{
    return(
        <div>
            <HomepageNavbar></HomepageNavbar>
            <div style={{
                height:"100vh",
                backgroundColor:"#05192d"
            }}>
                    <h1   style={{
                            marginTop:"50px",
                            color:"#05192d",
                            width:"100%",
                            textAlign:"center"
                        }}>
                            FEEDBACK
                    </h1>
                <Grid container>
                    <Grid item sm={1} xs={0}></Grid><Grid item sm={4} xs={12}> <Commentbox></Commentbox> </Grid><Grid item sm={2} xs={0}></Grid><Grid item sm={4} xs={0}></Grid><Grid item sm={1} xs={0}></Grid>
                    <Grid item sm={1} xs={0}></Grid><Grid item sm={4} xs={0}></Grid><Grid item sm={2} xs={0}></Grid><Grid item sm={4} xs={12}> <Commentbox></Commentbox> </Grid><Grid item sm={1} xs={0}></Grid>
                </Grid>
            </div>
            <FooterStyle>
            </FooterStyle>
           <Footer></Footer>
        </div>
    );
}
export default  Feedback;