import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CarouselImages from './carousal';
import Packages from './allpackages';
import {Grid} from '@material-ui/core';
import {Card, CardMedia, CardContent, Typography, Paper} from '@material-ui/core';
import useStyles from './stylesRoom';

// Nidhi's Part
const About = (props) => {
    const styleClasses = useStyles();
    const[posts,setPosts]= useState([]);

    useEffect(() => {   // Fetch data from about API
      axios.get('https://projecthydragroupserver.herokuapp.com/api/about').then((response) => {
        setPosts(response.data);
        console.log(response);
      });
      
    }, []);
  
  const addAbout = async (e) => {
      e.preventDefault();
  
      let token = localStorage.getItem('token');
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
    };

  //   return (
  //     <div>
  //       {posts.map((post) => (
  //         <Post post={post} key={post.id} />
  //       ))}
  //     </div>
  //   );
  // };  
    
  return (
    <div>
      {' '}
      <CarouselImages />

      
      <Grid container justify="center" spacing={0}>
      <center><h1>About us</h1></center>
      <Card>
            <CardMedia title="About"/>
            <CardContent>
            <img src="assets/slides/about1.jpg" width="25%" height="250px"/>
            <img src="assets/slides/about2.jpg" width="25%" height="250px"/>
            <img src="assets/slides/about3.jpg" width="25%" height="250px"/>
            <img src="assets/slides/about4.jpg" width="25%" height="250px"/>
            </CardContent>
             </Card>
          </Grid><br  />
        <center>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
          {/* <p>In our website users can plan their vacation and have their all sort of trips planned anywhere in the world.
        Here the user can have their booking done for hotels, transportation, adventure activities and also for rentals. 
        This website will help customers interact with help of various activities and features which will be offered and also it will share information about various tourist places around the world.
        And also users can look into their bookings and travel plans and make amendments if need be.
        There will be support features for any kind of questions they want to enquire about their travel and these will be administered by the admin. 
         </p> */}


         </center>
    </div>
  );
        };
  const Post = (props) => {
    return (
      <div>
        <p>{props.post.details}</p>
      </div>
    );
  };
export default About;