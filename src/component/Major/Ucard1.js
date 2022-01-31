import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
      backgroundColor:"rgb(1,1,1,0)",
      borderRadius:"0px",
      margin:"20px",
      [theme.breakpoints.down("sm")]: {
        margin:"2.5px",
      },
    },
    media: {
      height: 300,
       width:"400px",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        width:"50vh"
      },
    },
    title:{
      width:"100%",
      textAlign:"center",
      fontSize:"30px",
    },
    Description:{
      width:"50%",
      marginLeft:"25%",
      marginRight:"25%",
      [theme.breakpoints.down('sm')]:{
        display:"none",
      }
    }
  }));
  
  const UCard1 = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="My Post"> 
            <Typography gutterBottom variant="h5" 
            style={{
              color:"white",
              width:"100%",
              height:"100%",
              backgroundColor:"rgb(0,0,0,0.25)",
              paddingTop:"50px"
            }}>
                 <h1 className={classes.title}>{title}</h1>
                 {/* <p className={classes.Description}>
                 Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. ... The commercial use of IT encompasses both computer technology and telecommunications.
                 </p> */}
                 <div  style={{
                   width:"100%",
                   display:"flex",
                   flexDirection:"row",
                   justifyContent:"center"
                 }}>
                 <Link
                 to={
                   {pathname:"/MajorDetail",
                    state:{
                      name:"KIngdom of Cambodia"
                    }
                  }
                 }
                 >
                 <Button variant="contained" size="medium" color="primary" style={{
                   width:"200px",
                   marginLeft:"auto",
                   marginRight:"auto",
                 }} >
                    Learn More
                  </Button>
                 </Link>
                 </div>
              </Typography>
            </CardMedia>
          
        </CardActionArea>
        
      </Card>
    );
  };
  
  export default UCard1;
  