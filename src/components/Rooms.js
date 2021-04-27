import React , {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import HotelRooms from './HotelRooms';
import axios from 'axios';
// const room = [
//     {
//     id:1,
//     name:'Single room',
//     price: '$800',
//     img: 'assets/slides/room1.jpg',
//     },
//     {
//         id:2,
//         name:'Double room',
//         price: '$1000',
//         img: 'assets/slides/room2.jpg',
//     },
//     {
//         id:3,
//         name:'Double room',
//         price: '$2000',
//         img: 'assets/slides/room3.jpg',
//     },  
//     {
//         id:4,
//         name:'Double room',
//         price: '$1800',
//         img: 'assets/slides/room4.jpg',
//     },  
//     {
//         id:5,
//         name:'Single room',
//         price: '$500',
//         img: 'assets/slides/room5.jpg',
//     },  
//     {
//         id:6,
//         name:'Double room',
//         price: '$1000',
//         img: 'assets/slides/room6.jpg',
//     },  
//     {
//         id:7,
//         name:'Double room',
//         price: '$700',
//         img: 'assets/slides/room7.jpg',
//     },
//     {
//         id:8,
//         name:'Single room',
//         price: '$400',
//         img: 'assets/slides/room8.jpg',
//     },  
    
// ];
const Rooms = () =>{

    const[posts,setPosts]= useState([]);

    useEffect(() => {
      axios.get('https://projecthydragroupserver.herokuapp.com/api/hotelroom').then((response) => {
        setPosts(response.data);
        console.log(response);
      });
      
    }, []);
    return(
    <div>
        <Grid container justify="center" spacing={1}>
            {posts.map((r) => (
                <Grid key={r.id} xs={12} sm={6} md={4} lg={3}>
                    <HotelRooms r={r}/>
                </Grid>
            ))}
        </Grid>
    </div>
    );
};
export default Rooms;