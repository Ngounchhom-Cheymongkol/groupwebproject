// import {
//     Button,
//     Card,
//     CardActionArea,
//     CardActions,
//     CardContent,
//     CardMedia,
//     makeStyles,
//     Typography,
//     Rating
//   } from "@material-ui/core";
//   import React from 'react';
// import Rating from '@material-ui/lab/Rating';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

//   const useStyles = makeStyles((theme) => ({
//     card: {
//       marginBottom: theme.spacing(5),
//       width:"400px",
//       margin:"20px"
//     },
//     media: {
//       height: 250,
//       [theme.breakpoints.down("sm")]: {
//         height: 250,
//       },
//     },
//   }));
  
//   const Ratebox = ({ img, title }) => {
//     const [value, setValue] = React.useState(2);
//     const [hover, setHover] = React.useState(-1);
//     const classes = useStyles();
//     return (
//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia className={classes.media} image={img} title="My Post" />
//           <CardContent>
//             <Typography gutterBottom variant="h5">
//               {title}
//             </Typography>
//             <Typography variant="body2">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               consectetur earum est.
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//       />
//       </Card>
//     );
//   };
  
//   export default Ratebox;
  