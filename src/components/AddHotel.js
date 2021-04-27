import React, {useState, useEffect} from 'react';
import useStyles from './stylesRoom';
import { TextField} from '@material-ui/core';
import axios from 'axios';
import decode from 'jwt-decode';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
// This page will only display at admin side because admin can only able to Add hotel
const AddHotel = () =>{
    const [formData, setFormData] = useState({
        image:'',
        name:'',
        price: ''
    });

    const styleClasses = useStyles();

    const {image,name,price} = formData;

    const onChange2 = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    }

    const onSubmit2 = async (e) => {
        e.preventDefault();
    
        let token = localStorage.getItem('token');
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token':token
                 
            },
        };
        let data = {
            image:image,
            name:name,
            price:price
        }
        try{
        // Insert data into hotel
            const response = await axios.post('https://projecthydragroupserver.herokuapp.com/api/hotelroom',data,config);
            localStorage.setItem('token',response.data.token);
            console.log(response);
            let decodeduser = decode(response.data.token);
            console.log(decodeduser);
        }
        catch(e){
            console.log("error", e);
        }
    }
    
    return(
        <div>
            <NavLink className="navBar" to="/adminpanel">
                Back
              </NavLink>
                <BrowserRouter>
        
          <Switch>
            <Route path="/adminpanel">Back
              <adminPanel />
            </Route>
            </Switch>
            </BrowserRouter>
        <form onSubmit={ (e) => onSubmit2(e)} >
                    <TextField
                    variant="outlined"
                    name="image"
                    label="Image Link"
                    onChange={ (e) => onChange2(e)}
                    />
                    <br/><br/>
                    <TextField
                    variant="outlined"
                    label="Name"
                    name="name"
                    onChange={ (e) => onChange2(e)}
                    />
                  <br/><br/>
                    <TextField type="text"
                        variant="outlined"
                        label="Price"
                        name="price"
                        onChange={ (e) => onChange2(e)}/>
                     
                     <br/><br/>
                <input type="submit" variant="outlined" color="primary" className={styleClasses.buttonDesign}
                name="submit"/>
                


               
              </form>
        </div>
    )
}
export default AddHotel;