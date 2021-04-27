import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core';
import DealApply from './DealApply';
import {Card, CardMedia, CardContent, Typography, Paper} from '@material-ui/core';
// const deal = [
//     {
//     id:1,
//     deal: 'Book 2 nights get 1 night free',
//     img: 'assets/slides/room5.jpg',
//     },
//     {
//         id:2,
//         deal: 'Use code FOODFREE and get 20%',
//         img: 'assets/slides/food.jpg',
//     },
//     {
//         id:3,
//         deal: 'Get 50% using code 50FLIGHT',
//         img: 'assets/slides/flight.jpg',
//     },  
//     {
//         id:4,
//         deal: 'Buy one and get one free using code ADVFREE',
//         img: 'assets/slides/adventure.jpg',
//     },  
    
// ];


const Deals = () =>{
    const[posts,setPosts]= useState([]);

    useEffect(() => {
      axios.get('https://projecthydragroupserver.herokuapp.com/api/deal').then((response) => {
        setPosts(response.data);
        console.log(response);
      });
      
    }, []);
    return(
    <div>
        <br/>
       <center><h1>Deals and Coupons</h1></center>
       <br />
        <Grid container justify="center" spacing={1}>
            {posts.map((d) => (
                <Grid key={d.id} xs={12} sm={6} md={4} lg={3}>
                    <DealApply d={d}/>
                </Grid>
            ))}
        </Grid>
    </div>
    );
};
export default Deals;