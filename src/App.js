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
import { useHistory, useLocation } from 'react-router-dom';

export const Userloggedin = createContext()

function App() {
const [issignedin,setIssignedin] = useState(false)


const history = useHistory()
const ''''''''location = useLocation()
let { from } = location.state || { from: { pathname: "/" } };


  const loginemail = data => {
    if (data.fname && data.lname && data.email && data.password === data.confirmpassword) {
    auth.createUserWithEmailAndPassword(data.email,data.password)
    .then(res => {
      setIssignedin(true)
      history.replace(from);
      auth.currentUser.updateProfile({
        displayName: data.fname + " " +  data.lname
      }).then(res => {

      })
      .catch(err => alert(err))
    })
    .catch(err => alert(err))
    }
  if(!data.fname && !data.lname && data.email && data.password){
    auth.signInWithEmailAndPassword(data.email,data.password)
.then(res => {
  setIssignedin(true)
  history.replace(from);
  alert("signin")
})
.catch(err => alert(err))
   
    
  
  }
  }
const googlelogin  =() => {
  auth.signInWithPopup(providergoogle)
  .then(res => {
    console.log(res);
    setIssignedin(true)
    history.replace(from);
    auth.currentUser.updateProfile({
      displayName: res.user.displayName
    })
  })
  .catch(err => alert(err))
}


const facebooklogin =() => {
 auth.signInWithPopup(providerfb)
 .then(res => {
   alert("signin")
   history.replace(from);
   setIssignedin(true)
   console.log(res);
 })
 .catch(err => alert(err))
}
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
            <Login loginemail={loginemail} googlelogin={googlelogin} facebooklogin={facebooklogin} />
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
