import { Container, makeStyles,Grid, Paper } from "@material-ui/core";
import Imagelist from "../ImageList";
import { Facebook, Web, YouTube } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const UDetail = () => {
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
                            - Royal University of Phnom penh
                    </h1>
                            {/* Major image */}
                    <Paper style={{padding:"5%"}}>
                                <img style={{
                                    width:"100%",
                                    }} 
                                        src="http://2.bp.blogspot.com/-w5IY3xzQEIg/UJVGOsrGupI/AAAAAAAAAFk/phzgNzMGeZE/s1600/rupp.jpg"
                                ></img>
                    </Paper>
                    {/* What is major? */}
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - Information
                        </h1>
                            <h4>
                                - Location : Toul kok,Phnom penh, Cambodia 
                            </h4>
                            <h4>
                                - Type of University : Science ,Socail Science,Engineering,Education ,Language
                            </h4>
                            <h4>
                                - Official website :
                                     <a href="http://www.rupp.edu.kh/"><Web></Web></a>
                                    <a href="/"><YouTube> </YouTube></a>
                                    <a href="Major"><Facebook></Facebook> </a>
                            </h4>
                        
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

export default UDetail;
