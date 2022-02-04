import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    Box,
    Modal
  } from "@material-ui/core";
  import { Cancel} from "@material-ui/icons";
  import { useState } from "react";
import Mdetail from "../Major/Mdetail";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
      backgroundColor:"rgb(1,1,1,0)",
      borderRadius:"0px",
    },
    media: {
      height: 600,
      [theme.breakpoints.down("sm")]: {
        height: 300,
      },
    },
    title:{
      width:"100%",
      textAlign:"center",
      [theme.breakpoints.down('sm')]:{
        fontSize:"30px"
      }
    },
    Description:{
      width:"50%",
      marginLeft:"25%",
      marginRight:"25%",
      [theme.breakpoints.down('sm')]:{
        display:"none",
      }
    },
    paper:{
      width: "100%",
      height:"100%",
      background:"rgb(255,255,255)"
    }
  }));
  function getModalStyle() {
    const top = 1
    const left = 1

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        overflow: "scroll"
    };
}
  const style = {
    width: "100.75%",
    height:"100.75%",
    bgcolor: 'white',
    border: '2px solid #000',
    display:"flex",
    flexDirection:"column",
    p:0,
  };
  const SlideCard = ({data }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [menuopen, setMenuopen] =useState(false);
    const handleOpen = () => setMenuopen(true);
    const handleClose = () => setMenuopen(false);
    return (
      <>
            <Modal
                open={menuopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box style={style}>
                
                <div style={getModalStyle()} className={classes.paper}>
                  <Typography style={{
                  width:"100%",
                  display:"flex",
                  flexDirection:"row",
                  flexWrap:"wrap",
                  justifyContent:"space-around",
                  color:"#05192d",
                  marginTop:"25px",
                  marginBottom:"25px"
                }}>
                {data.Name}
                <Cancel onClick={handleClose}></Cancel>
                </Typography>
                    <Mdetail data={data}></Mdetail>
                </div>
                
                </Box>
            </Modal>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={data.img} title="My Post"> 
            <Typography gutterBottom variant="h5" 
            style={{
              color:"white",
              width:"100%",
              height:"100%",
              backgroundColor:"rgb(0,0,0,0.25)",
              paddingTop:"50px"
            }}>
                 <h1 className={classes.title}>{data.Name}</h1>
                 <p className={classes.Description}>
                 Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. ... The commercial use of IT encompasses both computer technology and telecommunications.
                 </p>
                 <div  style={{
                   width:"100%",
                   display:"flex",
                   flexDirection:"row",
                   justifyContent:"center"
                 }}>
                 <Button variant="contained" size="medium" color="primary" style={{
                   width:"200px",
                   marginLeft:"auto",
                   marginRight:"auto"
                 }} onClick={handleOpen}>
                    Learn More
                  </Button>
                 </div>
              </Typography>
            </CardMedia>
          
        </CardActionArea>
        
      </Card>
      </>
      
    );
  };
  
  export default SlideCard;
  