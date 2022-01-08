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
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
      backgroundColor:"black"
    },
    media: {
      height: 350,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  
  const SlideCard = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="My Post" />
          <CardContent style={{
              backgroundColor:"rgb(255,255,255,0.25)",color:"white"
          }}>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  };
  
  export default SlideCard;
  