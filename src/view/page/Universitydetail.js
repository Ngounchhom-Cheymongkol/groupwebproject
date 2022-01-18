import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../../component/Footer";
import HomepageNavbar from "../../component/HomepageNavbar";
import FooterStyle from "../../component/FooterStyle";
import UDetail from "../../component/University/UDetail";

const useStyles = makeStyles((theme) => ({
  
  left:{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const UniversityDetail = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"rgb(225,225,225)"}}>
      <HomepageNavbar></HomepageNavbar>
      
      <Grid container>
        <Grid item sm={12} xs={12}>
          <UDetail></UDetail>
        </Grid> 
        
      </Grid>
     <FooterStyle></FooterStyle>
        <Footer></Footer>
    </div>
  );
};

export default UniversityDetail;
