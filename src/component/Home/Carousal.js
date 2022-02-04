import {React,useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import SlideCard from './SlideCard';
function Carousell(props) {
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
    return (
        <Carousel>
            {Items.map((item,i)=>(
                    <SlideCard data={item}></SlideCard>
                ))}
                
        </Carousel>
    );
}

// const Item = ({ItemTitle, description,ImageItem}) => {
//     return (
        
//         // <Paper style={{
//         //     // backgroundImage:`url(${"https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG"})`,
            
//         // }}>
//         //     <img src='https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG' style={{
//         //         width:"100%",
//         //         diplay:"none"
//         //     }}>
//         //     </img>
//         //     <h2 style={{
//         //     }}>{name}</h2>
//         //     <p>{description}</p>            
//         //     <Button>more info...</Button>
//         // </Paper>
//     );
// };
export default Carousell;