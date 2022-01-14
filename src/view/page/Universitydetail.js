import { Grid, makeStyles } from "@material-ui/core";
import Feed from "../../component/Feed";
import Leftbar from "../../component/Leftbar";
import Navbar from "../../component/Navbar";
import Treeview from "../../component/TreeView";
import Footer from "../../component/Footer";
import HomepageNavbar from "../../component/HomepageNavbar";
import Mdetail from "../../component/Mdetail";
import FooterStyle from "../../component/FooterStyle";
import UDetail from "../../component/UDetail";

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
