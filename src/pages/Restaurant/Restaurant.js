import React from 'react';
import {Grid} from '@material-ui/core';
import Restaurants from './Restaurants';
import Singup from './SignUp';
import Box from '@material-ui/core/Box';
import useStyles from './stylesRestaurant';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const room = [
    {
    id:1,
    name:'Tahinis',
    Location: 'London',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    Details: "4.5/5"
    },
    {
        id:2,
        name:'Barneys',
        Location: 'Hamilton',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },
    {
        id:3,
        name:'Jack Aston',
        Location: 'Toronto',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },  
    {
        id:4,
        name:'Jo Thai Food',
        Location: 'Etobiko',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },  
    {
        id:5,
        name:'London Breakfast',
        Location: 'London',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },  
    {
        id:6,
        name:'Messis',
        Location: 'Windsor',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },  
    {
        id:7,
        name:'Punjabi Rasoi',
        Location: 'Ottawa',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },
    {
        id:8,
        name:'Xiu Chinese Food',
        Location: 'Markham',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        Details: "4.5/5"
    },  
    
];
const Restaurant = () =>{
    const styleclasses = useStyles();
    return(
    <div>
 

 <Box className={styleclasses.hero}>
        <Box>Restaurants</Box>
      </Box>


<Autocomplete 
      id="combo-box-demo"
      options={room}
      getOptionLabel={(option) => option.Location}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Please Write or select Location" variant="outlined" />}
    />

        <Grid container justify="center" spacing={1}>
            {room.map((r) => (
                <Grid key={r.id} xs={12} sm={6} md={4} lg={3}>
                    <Restaurants r={r}/>
                </Grid>
            ))}
        </Grid>
        <Singup />
    </div>
    );
};
export default Restaurant;