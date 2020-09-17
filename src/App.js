import React from 'react';

import './App.css';
import Nav from './comp/Nav';
import HeroSection from './comp/HeroSection';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './comp/Login';
import auth, { providergoogle } from './comp/firebase';

function App() {


  const loginemail = data => {
    if (data.fname && data.lname && data.email && data.password === data.confirmpassword) {
    auth.createUserWithEmailAndPassword(data.email,data.password)
    .then(res => {
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
  alert("signin")
})
.catch(err => alert(err))
   
    
  
  }
  }
const googlelogin  =() => {
  auth.signInWithPopup(providergoogle)
  .then(res => {
    console.log(res);
    auth.currentUser.updateProfile({
      displayName: res.user.displayName
    })
  })
  .catch(err => alert(err))
}
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <div className="home">
  <Nav color="white" filter= "invert(100%)" showForm = "true" />
     <HeroSection/>
  </div>
          </Route>
          <Route exact path='/login'>
            <Login loginemail={loginemail} googlelogin={googlelogin} />
          </Route>
        </Switch>
      
      </Router>
  
    </div>
  );
}

export default App;
