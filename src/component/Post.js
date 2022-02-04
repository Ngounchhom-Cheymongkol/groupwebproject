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
  import { Cancel } from "@material-ui/icons";
import { useState } from "react";
import UDetail from "./University/UDetail";
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
      width:"400px",
      margin:"20px"
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 250,
      },
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
  const Post = ({ data}) => {
    const [open, setOpen] = useState(false);
    const [menuopen, setMenuopen] =useState(false);
    const handleOpen = () => setMenuopen(true);
    const handleClose = () => setMenuopen(false);
    const classes = useStyles();
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
                {data.Title}
                <Cancel onClick={handleClose}></Cancel>
                </Typography>
                    <UDetail data={data}></UDetail>
                </div>
                
                </Box>
            </Modal>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={data.image} title="My Post" alt="drive image" />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {data.Title}
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                consectetur earum est.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleOpen}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </>
    );
  };
  
  export default Post;
  