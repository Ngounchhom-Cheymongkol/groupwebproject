import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
  Subject,
  School,
  Feedback,
  Info,
} from "@material-ui/icons";
import { theme } from "./theme";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: "#05192d",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
    [theme.breakpoints.down("sm")]: {
      color:"white",
      backgroundColor: "#05192d",
      paddingLeft:"0px"

    },
    
  },
  item: {
    
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(4),
    marginLeft:"0px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
    "&:hover":{
      color:"#05192d",
      backgroundColor:"rgb(2,25,45,0.5)"
    },
    [theme.breakpoints.down("sm")]: {
      color:"white",
      width:"100%",
      "&:hover":{
        color:"rgb(255,255,255,0.25)",
        backgroundColor:"none"
      }
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      color:"white",
      "&:hover":{
        color:"rgb(255,255,255,0.25)",
        backgroundColor:"none"
      }
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Button variant="text" className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </Button>
      <Button className={classes.item}>
        <Subject className={classes.icon} />
        <Typography className={classes.text}>Major</Typography>
      </Button>
      <Button className={classes.item}>
        <School className={classes.icon} />
        <Typography className={classes.text}>University</Typography>
      </Button>
      <Button className={classes.item}>
        <Info className={classes.icon} />
        <Typography className={classes.text}>About</Typography>
      </Button>
      <Button className={classes.item}>
        <Feedback className={classes.icon} />
        <Typography className={classes.text}>Feedback</Typography>
      </Button>
      
    </Container>
  );
};

export default Leftbar;
