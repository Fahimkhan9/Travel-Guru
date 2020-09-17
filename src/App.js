import React from 'react';

import './App.css';
import Nav from './comp/Nav';
import HeroSection from './comp/HeroSection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './comp/Login';
import auth, { providerfb, providergoogle } from './comp/firebase';
import { useState } from 'react';
import Booking from './comp/Booking';
import Search from './comp/Search';
import { createContext } from 'react';
import PrivateRoute from './comp/PrivateRoute';


export const Userloggedin = createContext()

function App() {
const [issignedin,setIssignedin] = useState(false)





console.log(issignedin);
  return (
  
      <Userloggedin.Provider value={[issignedin,setIssignedin]}>

   
      <Router>
        <Switch>
          <Route exact path='/'>
          <div className="home">
  <Nav color="white" filter= "invert(100%)" showForm = "true" issignedin={issignedin}  />
     <HeroSection/>
  </div>
          </Route>
          <Route exact path='/login'>
            <Login  />
          </Route>
          <Route exact path="/destination/:id">
            <Booking/>
          </Route>
          <PrivateRoute exact path="/search">
            <Search/>
          </PrivateRoute>
          
        </Switch>
      
      </Router>
      </Userloggedin.Provider>
   
  );
}

export default App;
