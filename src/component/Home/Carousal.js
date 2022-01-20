import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import SlideCard from './SlideCard';
import { Title } from '@material-ui/icons';
import logo1 from './../../Asset/Image/img (1).jpg'
import logo2 from './../../Asset/Image/img (2).jpg'
import logo3 from './../../Asset/Image/img (3).jpg'
import logo4 from './../../Asset/Image/img (4).jpg'
import logo5 from './../../Asset/Image/img (5).jpg'
function Carousell(props) {
    const items = [
        {
            ItemTitle: 'Electronic Engineering',
            description: 'Full Stack Web Developer',
            ImageItem:logo1
        },
        {
            ItemTitle: 'Achitecture',
            description: 'Author',
            ImageItem:logo2
        },
        {
            ItemTitle: 'Infomation Technology',
            description: 'Math Student',
            ImageItem:logo3
        },
        {
            ItemTitle: 'Economic',
            description: 'Math Student',
            ImageItem:logo4
        },
        {
            ItemTitle: '...',
            description: 'Math Student',
            ImageItem:logo5
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