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
                                    color:"#05192d"
                                }}>
                                         - What is {data.Name}?
                        </h1>
                        <p>
                            {data.Description}
                        </p>
                    </Paper>
                    <Paper style={{padding:"5%"}} >
                        <h1   style={{
                                    color:"#05192d"
                                }}>
                                         - Subject of {data.Name}
                        </h1>
                        <p>
                            {data.Subject}
                        </p>
                    </Paper>
                    <Paper style={{padding:"5%",paddingLeft:"15%"}} >
                        <h1   style={{
                                    color:"#05192d"
                                }}>
                                         - Subject Requirement
                        </h1>
                        
                        <ul>
                            {
                                data.SubjectRequire.map((item)=>(
                                    <li>{item}</li>
                                  ))
                            }
                        </ul>
                    </Paper>
                    <Paper style={{padding:"5%",paddingLeft:"15%"}} >
                        <h1   style={{
                                    color:"#05192d"
                                }}>
                                         - {data.Name} Job
                        </h1>
                        
                        <ul>
                            {
                                data.Job.map((item)=>(
                                    <li>{item}</li>
                                  ))
                            }
                        </ul>
                    </Paper>
                    <Paper style={{padding:"5%",paddingLeft:"15%"}} >
                        <h1   style={{
                                    color:"#05192d"
                                }}>
                                         - University
                        </h1>
                        
                        <ul style={{marginRight:"100px"}}>
                            {
                                data.university.map((item)=>(
                                    <li>{item}</li>
                                  ))
                            }
                        </ul>
                        <h3   style={{
                                    marginTop:"25px",
                                    color:"#05192d"
                                }}>
                                         - Price : {data.Price}
                        </h3>
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
