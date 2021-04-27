import React, {useState, useEffect} from 'react';
import AddHotel from './AddHotel';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
const AddRoomButton = () =>{
    return(
        <div>
        <BrowserRouter>
        <NavLink className="navBar" to="/AddHotel">
                AddHotel
              </NavLink>
          <Switch>
            <Route path="/AddHotel">Add Hotel
              <AddHotel />
            </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default AddRoomButton;