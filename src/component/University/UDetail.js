import { Container, makeStyles,Grid, Paper } from "@material-ui/core";
import Imagelist from "../ImageList";
import { Facebook, Web, YouTube } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const UDetail = ({data}) => {
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
                            - {data.Title}
                    </h1>
                            {/* Major image */}
                    <Paper style={{padding:"5%"}}>
                                <img style={{
                                    width:"100%",
                                    }} 
                                        src={data.image}
                                ></img>
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                    color:"#05192d"
                                }}>
                                         - History
                        </h1>
                        <p>
                            {data.Detail}
                        </p>
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
                                - {data.Location}
                            </h4>
                            <h4>
                                - Type of University : {data.Type}
                            </h4>
                            <h4>
                                - Official website :
                                     <a href="http://www.rupp.edu.kh/" style={{color:"black"}}><Web></Web></a>
                                    <a href="https://www.youtube.com/channel/UCYxOQSDwKs-_6yWFijLAjyQ" style={{color:"red"}}><YouTube> </YouTube></a>
                                    <a href="https://www.facebook.com/chhoin68" style={{color:"blue"}}><Facebook></Facebook> </a>
                            </h4>
                        
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                     margin:"50px",
                                    color:"#05192d"
                                }}>
                                         - Major
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
