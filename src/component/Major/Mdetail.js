import { Container, makeStyles,Grid, Paper } from "@material-ui/core";
import Imagelist from "../ImageList";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Mdetail = ({data}) => {
  const classes = useStyles();
  return (
   
       <Grid container >
           <Grid item sm={1} xs={0}>
               
           </Grid>
           <Grid item sm={10} xs={12} style={{
                background:"white",
                borderRadius:"5px"
                }}>
                        {/* Major Title */}
                    <h1   style={{
                            margin:"50px",
                            color:"#05192d"
                        }}>
                            {data.Name}
                    </h1>
                            {/* Major image */}
                    <Paper style={{padding:"5%"}} >
                                <img style={{
                                    width:"100%",
                                    
                                    }} 
                                        src={data.img}
                                ></img>
                    </Paper>
                    {/* What is major? */}
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - What is Civil Engineering?
                        </h1>
                        <p>
                            {data.Description}
                        </p>
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - Subject of Civil Engineering
                        </h1>
                        <p>
                            {data.Subject}
                        </p>
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - Civil Engineering Job
                        </h1>
                        
                        <ul>
                            <li>Horizontal construction engineer....</li>
                            <li>Commissioning engineer. ..</li>
                            <li>Civil engineer. ...</li>
                            <li>Project engineer. ...</li>
                            <li>Geotechnical engineer. ...</li>
                            <li>Mining engineer. ...</li>
                            <li>Fire engineer. ...</li>
                            <li>Structural engineer.</li>
                        </ul>
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - Image list
                        </h1>
                        
                        <Imagelist></Imagelist>
                    </Paper>
           </Grid>
           <Grid item sm={1} xs={0}>
               
           </Grid>
       </Grid>
   
  );
};

export default Mdetail;
