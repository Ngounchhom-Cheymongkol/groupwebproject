import { Button, Grid } from "@material-ui/core";
import Footer from "../../component/Footer";
import FooterStyle from "../../component/FooterStyle";
import HomepageNavbar from "../../component/HomepageNavbar";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Feedback.css'
import { useState } from "react";
const Feedback=()=>{
    const [value, setValue] =useState(2);
    return(
        <div>
            <HomepageNavbar></HomepageNavbar>
            <div style={{
                height:"100vh",
                backgroundColor:"#05192d"
            }}>
                <Grid container className="body" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <h1 cla="rating_heading" style={{color:"white",width:"100%",textAlign:"center"}}>5 Stars Rating </h1>
                    <div cla="star_rating" style={{color:"white",width:"100%",textAlign:"center"}}>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">How was your experience?</Typography>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            />
                        </Box>
                    <p cla="current_rating" style={{color:"white"}}>{value} of 5</p>
                    </div>
                </Grid>
            </div>
            <FooterStyle>
            </FooterStyle>
           <Footer></Footer>
        </div>
    );
}
export default  Feedback;