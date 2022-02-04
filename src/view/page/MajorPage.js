import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
import FooterStyle from '../../component/FooterStyle';
import UCard1 from "../../component/Major/Ucard1";
import { useEffect, useState } from 'react';

const useStyle=makeStyles((theme)=>({
    Feed:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        [theme.breakpoints.down("sm")]: {
          flexDirection:"row",
        }
    }
}));
const Majorpage=()=>{
    // const Items=[
    //                 {
    //                     title:"Civil Engineering",
    //                     img:"https://allplan.asia/wp-content/uploads/2020/06/how-much-do-civil-engineer-make-1600x900.jpg"
    //                 },
    //                 {
    //                     title:"Computer Science" ,
    //                     img:"https://www.pba.edu/_resources/images/images_on_pages/computer-system.jpg"
    //                 },
    //                 {
    //                     title:"Ecology" ,
    //                     img:"https://eeb.arizona.edu/sites/default/files/styles/uaqs_full_width_lg/public/EEB%20Custom2.jpg?itok=lmmFxCG1&timestamp=1576301524"
    //                 },
    //                 {
    //                     title:"Biology Engineering" ,
    //                     img:"https://www.studyinternational.com/wp-content/uploads/2020/06/shutterstock_691541056.jpg"
    //                 },
    //                 {
    //                     title:"Health",
    //                     img:"https://www.slma.cc/wp-content/uploads/2018/01/SLMA_ProsPCP.jpg"
    //                 },
    //                 {
    //                     title:"Language" ,
    //                     img:"https://s3e8p5g8.rocketcdn.me/wp-content/uploads/2018/11/english_major.jpg"
    //                 },
    //                 {
    //                     title:"Electronic Engineering" ,
    //                     img:logo1
    //                 },
    //                 {
    //                     title:"Achitecture",
    //                     img:logo2
    //                 },
    //                 {
    //                     title:"Information Technology",
    //                     img:logo3
    //                 },
    //                 {
    //                     title:"Economic",
    //                     img:logo4
    //                 },
    //                 {
    //                     title:"Achitecture",
    //                     img:logo5
    //                 }
    //             ]

                const [Items,setItems]=useState([]);
    useEffect(()=>{
     loadData();
    },[])
    const loadData =()=>{ 
      fetch("http://localhost:5000/Major", {
        
        // configuration
     })
     .then(response => response.json())
     .then(data => {
       setItems(data);
         // do something with data
     })
    }
    const classes=useStyle();
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container  style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    
                    <Grid item sm={12} xs={12}>
                        <h1
                        style={{
                            color:"white",
                            width:"100%",
                            textAlign:"center",
                        }}>
                            List of Major
                        </h1>
                    </Grid>
                </Grid>
                <Grid container style={{
                    // padding:"50px",
                }}>
                    <Grid item sm={2}>
                        
                    </Grid>
                    <Grid item sm={8}>
                    </Grid>
                    <Grid item sm={2}> 
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>


                            <Grid style={{backgroundColor:"#06bdfc",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                                
                            </Grid>


                    <Grid style={{backgroundColor:"white",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"30px"}} item sm={4} xs={4}>
                        
                    </Grid>

                </Grid>
            </div>
            <Paper  className={classes.Feed}>
                {Items.map((item,i)=>(
                <UCard1 data={item}></UCard1>
                ))}
            </Paper>
            <FooterStyle></FooterStyle>
            <Footer></Footer>
       </div>
    );
}

export default Majorpage;