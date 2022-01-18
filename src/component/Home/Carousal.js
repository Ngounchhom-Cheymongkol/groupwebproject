import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import SlideCard from './SlideCard';
import { Title } from '@material-ui/icons';

function Carousell(props) {
    const items = [
        {
            ItemTitle: 'Medicine',
            description: 'Full Stack Web Developer',
            ImageItem:"https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG"
        },
        {
            ItemTitle: 'Bio Engineering',
            description: 'Author',
            ImageItem:"https://www.studyinternational.com/wp-content/uploads/2020/06/shutterstock_691541056.jpg"
        },
        {
            ItemTitle: 'History',
            description: 'Math Student',
            ImageItem:"https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG"
        },
        {
            ItemTitle: 'Economic',
            description: 'Math Student',
            ImageItem:"https://www.conncoll.edu/media/major-images/Economics.jpg"
        },
        {
            ItemTitle: 'Electrical Engineering',
            description: 'Math Student',
            ImageItem:"https://uwaterloo.ca/future-students/sites/ca.future-students/files/uploads/images/electrical_engineering_kenneth_mai_kamil_wozinski_and_arshan_khanifar_90-1.jpg"
        },
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}

const Item = ({ItemTitle, description,ImageItem}) => {
    return (
        <SlideCard img={ImageItem} title={ItemTitle}></SlideCard>
        // <Paper style={{
        //     // backgroundImage:`url(${"https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG"})`,
            
        // }}>
        //     <img src='https://tcop.touro.edu/media/schools-and-colleges/tourocop/images/stories/IMG_3517.JPG' style={{
        //         width:"100%",
        //         diplay:"none"
        //     }}>
        //     </img>
        //     <h2 style={{
        //     }}>{name}</h2>
        //     <p>{description}</p>            
        //     <Button>more info...</Button>
        // </Paper>
    );
};
export default Carousell;