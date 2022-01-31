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
      height:"400"
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 250,
      },
    },
  }));
  
  const Commentbox = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" style={{
              width:"100%",
              textAlign:"center"          }}
              >
              Can do you ask something
            </Typography>
            <Typography variant="body1"  style={{
              width:"100%",
              textAlign:"center"          }}
              >
              let us know what we're getting right and what we can improve.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="medium" color="primary" style={{
              width:"50%",
              marginLeft:"25%",
          }}>
            Comment
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Commentbox;
  