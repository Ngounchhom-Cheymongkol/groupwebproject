import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { CardActions ,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding:"5px",
    flexDirection:"row",
    margin:"5px",
    marginTop:"10px",
    [theme.breakpoints.down("sm")]:{
  //     flexDirection:"column",
  //     justifyContent:"start",
    margin:"0px",
    marginTop:"10px",
  }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:"100%-150px",
    font:"10px"
    
  },
  Decription:{
        [theme.breakpoints.down("sm")]:{
                display:"none"
            }
  },
  content: {
    div:{
        flex: '1 0 auto',
      
    }
  },
  cover: {
    height:"250px",
    [theme.breakpoints.down("md")]:{
      height:"100px"
  }
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  TxtStyle:{
    [theme.breakpoints.down("sm")]:{
          marginTop:"0px",
          fontSize:"12px",
          
      }
  }
}));

export default function Ucard({Title,Type,Location,Detail}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      
        
      
      <img
        className={classes.cover}
        src="https://files.structurae.net/files/photos/2768/00031.jpg"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <h4 className={classes.TxtStyle}>
            {Title}
          </h4>
          <div className={classes.TxtStyle}>
            Type : {Type}
          </div>
          <div className={classes.TxtStyle}>
            Location : {Location}
          </div>
          <p color="textSecondary" className={classes.Decription}>
          {Detail}
          </p>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
        </div>
        
    </Card>
  );
}
