import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper } from "@material-ui/core";
import GroupedSelect from '../../component/GroupSelect'
import Footer from '../../component/Footer'
import React, { Component } from 'react';
import { Feed } from '@mui/icons-material';

class MyComponent extends Component {
  render() {
    const { data } = this.props; 
    console.log(data)
    return (
      <div>
          <div style={{background:"#05192d"}}>
                     <HomepageNavbar></HomepageNavbar>
                     <Grid container  style={{
                         padding:"50px",
                         paddingTop:"100px",
                     }}>
                         
                         <Grid item sm={12} xs={12}>
                           <GroupedSelect></GroupedSelect>
                          
                         </Grid>
                     </Grid>
                     <Grid container style={{
                         padding:"50px",
                         paddingTop:"0px",
                     }}>
                         <Grid item sm={2}>
                             
                         </Grid>
                         <Grid item sm={8}>
                         </Grid>
                         <Grid item sm={2}> 
                         </Grid>
                     </Grid>
                     <Grid container>
                         <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
     
     
                                 <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
                                 <Grid style={{backgroundColor:"",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
                                 <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                                     
                                 </Grid>
     
     
                         <Grid style={{backgroundColor:"white",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
                         <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4} xs={4}>
                             
                         </Grid>
     
                     </Grid>
                 </div>
                 <Feed></Feed>
                 <Footer></Footer>
                 
      </div>
    );
  }
}

export default MyComponent;
