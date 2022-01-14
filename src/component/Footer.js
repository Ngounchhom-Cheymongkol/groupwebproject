import { Container, Grid, makeStyles, Button } from "@material-ui/core"
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
const useStyle=makeStyles((theme)=>({
    FooterCon:{
        // width:"100%",
        backgroundColor:"white",
        color:"#05192d",
        paddingTop:"20px",
        paddingBottom:"30px",
        [theme.breakpoints.down('sm')]:{
            backgroundColor:"#05192d",
            color:"white",
            fontSize:"10px",
        }
    },
    FooterInfo:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"10px",
        [theme.breakpoints.down('sm')]:{
           width:"100%",
           display:"flex",
           flexDirection:"column"
        }
    },
    FooterInfo1:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-between",
        padding:"10px",
        [theme.breakpoints.down('sm')]:{
            display:"None",
        }
    },
    MediaIcon:{
        display:"flex",
        flexDirection:"row",

    },
    SMIcon:{
        color:"#05192d",
        [theme.breakpoints.down('sm')]:{
            color:"white"
        }
    }
}));
const Footer=()=>{
    const classes=useStyle();
    return(
        <Container className={classes.FooterCon}>
            <Grid container  className={classes.FooterInfo}>
                <h2>KhmerHope</h2>
                        <div className={classes.MediaIcon}>
                            <Button className={classes.SMIcon}>
                                <Facebook fontSize={"small"}></Facebook>
                            </Button>
                            <Button className={classes.SMIcon}>
                                <Twitter fontSize={"small"}></Twitter>
                            </Button>
                            <Button className={classes.SMIcon}>
                                <Instagram fontSize={"small"}></Instagram>
                            </Button>
                            <Button className={classes.SMIcon}>
                                <YouTube fontSize={"small"}></YouTube>
                            </Button>
                            
                            
                        </div>
            </Grid>
            <Grid container>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    <p>
                    Based on your learnings from this tutorial, you are ready to make some simple GUI apps. You have to learn more methods for styling and interaction with the objects in a GUI
                    </p>
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    Product
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    About
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    Address
                </Grid>
            </Grid>
        </Container>
    )
}
export default Footer;