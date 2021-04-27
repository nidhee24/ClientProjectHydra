import React from 'react';
import {Card, CardMedia, CardContent, Typography, Paper} from '@material-ui/core';
import useStyles from './stylesRoom';
import {useState,useEffect} from 'react';
import {Grid} from '@material-ui/core';
import { TextField, Dialog, Button} from '@material-ui/core';
import axios from 'axios';
import decode from 'jwt-decode';

const HotelRooms= ({r}) => {
    const [open, setOpen] = React.useState(false);
    
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        checkin: new Date(),
        checkout: new Date()
    });
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const styleClasses = useStyles();

    const {firstname,lastname,checkin,checkout} = formData;

    const onChange2 = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value});}

    const onSubmit2 = async (e) => {
        e.preventDefault();

        let config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let data = {
            firstname:firstname,
            lastname:lastname,
            checkin:checkin,
            checkout:checkout
        }
        try{
            
            console.log(firstname);
            const response = await axios.post('https://projecthydragroupserver.herokuapp.com/api/rooms',data,config);
            localStorage.setItem('token',response.data.token);
           console.log(response);
           let decodeduser = decode(response.data.token);
            console.log(decodeduser);
           
        }
        catch(e){
            console.log("error", e);
        }
        alert("booked");
       
    }
    return(
        <Paper>
        <Card className={styleClasses.card}>
            <CardMedia className={styleClasses.cardmedia} title={r.name} />
            <CardContent>
            <img src={r.image} width="100%" height="200px"/>
                    <div className={styleClasses.cardcontent}>    
                    <Typography variant="h5" gutterBottom>
                            {r.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {r.price}
                        </Typography>
                    </div>
                    <div>

        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={styleClasses.buttonDesign}>Book
             </Button>
      </div>
        <Dialog open={open} onClose={handleClose} className={styleClasses.design}>
            
        <center><h1>Book Yourself</h1></center>
        
        <form onSubmit={ (e) => onSubmit2(e)}>
            <Grid item x6={3}  spacing={3} className={styleClasses.gridStyle}>
            
                <TextField
                variant="outlined"
                label="First Name"
                name="firstname"
                onChange={ (e) => onChange2(e)}
                />
                <TextField
                variant="outlined"
                label="Last Name"
                name="lastname"
                onChange={ (e) => onChange2(e)}
                />
                </Grid>
                
                <TextField
                    type="date"
                    variant="outlined"
                    label="Check in"
                    name="checkin"
                    className={styleClasses.dateField}
                    InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={ (e) => onChange2(e)}/>
                
             <Grid item x6={3} spacing={3} className={styleClasses.gridStyle}>
                <TextField
                    type="date"
                    variant="outlined"
                    label="Check out"
                    name="checkout"
                    className={styleClasses.dateField}
                    InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={ (e) => onChange2(e)}/>
            </Grid>

            <Grid item x6={3} spacing={3} className={styleClasses.gridStyle}>
                
            <center><input type="submit" variant="outlined" color="primary" className={styleClasses.buttonDesign}
            name="submit"/>
                    </center>
                          
            </Grid>
            
          </form>
           
    </Dialog>
 </div>
                 
</CardContent>
</Card>
</Paper>

    )
    
    
}
export default HotelRooms;