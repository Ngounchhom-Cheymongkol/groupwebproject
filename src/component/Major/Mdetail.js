import { Container, makeStyles,Grid, Paper } from "@material-ui/core";
import Imagelist from "../ImageList";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Mdetail = () => {
  const classes = useStyles();
  return (
   
       <Grid container style={{
           marginTop:"100px",
          
       }}>
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
                            - Civil Engineering
                    </h1>
                            {/* Major image */}
                    <Paper style={{padding:"5%"}} >
                                <img style={{
                                    width:"100%",
                                    
                                    }} 
                                        src="https://i.pinimg.com/originals/3f/af/92/3faf92b0ec8e7803f92e24068d04734e.jpg"
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
                            Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.[1][2]

                            Civil engineering is traditionally broken into a number of sub-disciplines. It is considered the second-oldest engineering discipline after military engineering,[3] and it is defined to distinguish non-military engineering from military engineering.[4] Civil engineering can take place in the public sector from municipal public works departments through to federal government agencies, and in the private sector from locally based firms to global Fortune 500 companies.
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
                            <li>Horizontal construction engineer. ...</li>
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
