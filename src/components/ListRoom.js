import React from 'react';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';


import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class ListRoom extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            error: null,
            rooms:[],
            editMode:false,
            setOpen:false
        };
       
    }
   

    onChange2 (e)  {
         [e.target.name] = e.target.value ;

       // console.log(formData);
    }
    handleClickOpen () {
        this.setOpen(true);
      };
      handleClose () {
        this.setOpen(false);
      };
    componentDidMount() { // Admin can see booking done by users
        const UrlApi = 'https://projecthydragroupserver.herokuapp.com/api/rooms';
        fetch(UrlApi).then(res =>res.json()).then(
            (result) => {
                this.setState({
                    rooms:result
                })
            },
            (error) => {
                this.setState({error})
            }
        )
    }
    render(){
        const {error,rooms} = this.state;
        if(error){
            return(
                <div>Error: {error.message}</div>
            )
        }
        else{
        return(
            <div>
                <h2>Room List</h2>
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
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                        </tr>

                    </thead>
                    {rooms.map(room =>(
                        <tr key={room.id}>
                            <td>
                                {room.firstname}
                            </td>
                            <td>
                                {room.lastname}
                            </td>
                            <td>
                                {room.checkin}
                            </td>
                            <td>
                                {room.checkout}
                            </td>
                            <td>
    
                
                            </td> 
                        </tr>
                    ))}
                </Table>
            </div>
        )
        }
    }
}
export default ListRoom;