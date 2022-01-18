import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../../component/Footer";
import HomepageNavbar from "../../component/HomepageNavbar";
import Mdetail from "../../component/Major/Mdetail";
import FooterStyle from "../../component/FooterStyle";

const useStyles = makeStyles((theme) => ({
  
  left:{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const MajorDetail = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"white"}}>
      <HomepageNavbar></HomepageNavbar>
      <Grid container>
        <Grid item sm={1} xs={0}>
        </Grid>
        <Grid item sm={10} xs={12}>
          <Mdetail></Mdetail>
        </Grid>
        <Grid item sm={1} xs={0}>
        </Grid>
      </Grid>
      <FooterStyle></FooterStyle>
      <Footer></Footer>
    </div>
  );
};

export default MajorDetail;
