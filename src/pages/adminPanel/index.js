import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Rooms from '../../components/Rooms';
import AddHotel from '../../components/AddHotel';
import ListRoom from '../../components/ListRoom';
import Deals from '../../components/Deals';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center'
  },
  input: {
    marginTop: '2%',
    marginLeft: '10%',
    width: '60%',
  },
  button: {
    display:'block',
    marginLeft: '40%',
    marginTop: '5%',
    marginBottom: '5%'
  }
}));

export default function BasicTextFields() {
  const styleClasses = useStyles();
  const classes = useStyles();
  const [values, setValues] = useState({});

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    savePackage();
  }
  
  const savePackage = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/addPackage',
        values,
        config
      );
      document.getElementById("pForm").reset();
    } catch (e) {
      console.log('error ', e);
    }
  }

  return (
    <div className={classes.root}>
      <BrowserRouter>
      <NavLink className="navBar" to="/AddHotel">
      <Button variant="outlined" color="primary" className={styleClasses.buttonDesign}>Add Hotel
              </Button>   </NavLink>
          <Switch>
            <Route path="/AddHotel">
              <AddHotel />
            </Route>
            </Switch>
            </BrowserRouter>
            
            <br/>
            <br/>
          <BrowserRouter>
        <NavLink className="navBar" to="/ListRoom" >
        <Button variant="outlined" color="primary" className={styleClasses.buttonDesign}>Registered Hotel
              </Button>
              </NavLink>
          <Switch>
            <Route path="/ListRoom">
              <ListRoom />
            </Route>
            </Switch>
            </BrowserRouter>

      <h2>Add Package</h2>
      <form id="pForm" noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField className={classes.input} onChange={onChange} name="name" label="name" variant="outlined" />
        <TextField className={classes.input} onChange={onChange} name="description" label="description" variant="outlined" />
        <TextField className={classes.input} onChange={onChange} name="price" label="price" variant="outlined" />
        <TextField className={classes.input} onChange={onChange} name="image1" label="image1" variant="outlined"/>
        <TextField className={classes.input} onChange={onChange} name="image2" label="image2" variant="outlined" />
        <TextField className={classes.input} onChange={onChange} name="image3" label="image3" variant="outlined" />
        <Button variant="contained" type='submit' color="primary" className={classes.button}>Submit</Button>
      </form>
    </div>
  );
}