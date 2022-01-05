import { Grid, makeStyles } from "@material-ui/core";
import Feed from "../../component/Feed";
import Leftbar from "../../component/Leftbar";
import Navbar from "../../component/Navbar";
import Treeview from "../../component/TreeView";
import Footer from "../../component/Footer";
import HomepageNavbar from "../../component/HomepageNavbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const MajorDetail = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"rgb(225,225,225)"}}>
      <HomepageNavbar></HomepageNavbar>
      <Grid container>
        <Grid item sm={2} xs={0}>
          <Treeview></Treeview>
        </Grid>
        <Grid item sm={10} xs={12}>
          <Feed />
        </Grid>
            <Footer></Footer>
      </Grid>
    </div>
  );
};

export default MajorDetail;
