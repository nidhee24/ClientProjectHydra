import logo from './logo.svg';
import './App.css';
import React ,{ useState, useCallback }  from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import SearchAppBar from './components/navbar';
import Home from './pages/homePage';
import LoginSignup from './pages/loginSignup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Packages from './components/allpackages';
import Footer from './components/footer';
import Rooms from './components/Rooms';
import Blog from './pages/blog/Blog';
import Restaurant from './pages/Restaurant/Restaurant'
import Support from './components/Support';
import Career from './components/Career';
import Activity from './components/Activity';
import About from './components/About';
import Deals from './components/Deals';
import Review from './pages/review/Review';
import Package from './pages/package';
import AdminPanel from './pages/adminPanel';

import AuthContext from './contexts/AuthContext';

function App() {

  
  return (

    <>
      <Container style={{ padding: '0px' }}>
      {/* <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
> */}
        <BrowserRouter>
          <SearchAppBar />
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/loginSignup" component={LoginSignup} />
            <Route path="/allPackages" exact>
              <Packages />
            </Route>
            <Route path="/adminpanel" component={AdminPanel} exact/>
            <Route path="/package/:id" component={Package} exact/>
            <Route path="/About">
              <About />
            </Route>
            
            <Route path="/Rooms" >
              <Rooms />
            </Route>
            
            
            <Route path="/Restaurant">
              <Restaurant />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Deals">
              <Deals />
            </Route>
            <Route path="/Career">
              <Career />
            </Route>
            <Route path="/Activity">
              <Activity />
            </Route>
            <Route path="/Support">
              <Support />
            </Route>
            <Route path="/Review">
              <Review />
            </Route>
          </Switch>
        </BrowserRouter>
        {/* </AuthContext.Provider> */}
      </Container>
      <Footer />{' '}
    </>
  );
}

export default App;
