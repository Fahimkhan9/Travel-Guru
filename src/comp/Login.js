import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRef } from 'react';
import googleicon from '../Icon/google.png'
function Login(props) {
    const [showlogin,setShowLogin] = useState(true)
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const { register, handleSubmit, watch, errors } = useForm();
  
  
    return (
        <div>
            <Nav color="black"/>
            <form onSubmit={handleSubmit(props.loginemail)}>
{showlogin && <div className="form-group">
<input name="fname" className="form-control"  ref={register({ required: true })} placeholder="First Name"  />
{errors.fname && <span>First Name is required</span>}
</div>}
{showlogin && <div className="form-group">
<input name="lname" className="form-control"  ref={register({ required: true })} placeholder="Last Name" />
{errors.lname && <span>Last Name is required</span>}
</div> }
<div className="form-group">
<input name="email" className="form-control"  ref={register({ required: true })} placeholder="Email" />
{errors.email && <span>Email is required</span>}
</div>
<div className="form-group">
<input name="password" ref={passwordRef} className="form-control"  ref={register({ required: true })} placeholder="Password" />
{errors.password && <span>Password is required</span>}
</div>
{showlogin && <div className="form-group">
<input name="confirmpassword" ref={confirmpasswordRef} className="form-control"  ref={register({ required: true })} placeholder="Confirm Password" />
{errors.confirmpassword && <span>Confirm Password is required</span>}

</div>}

      
      <input type="submit" />
    <p onClick={() => setShowLogin(showlogin ? false : true)}>{showlogin ? "Already Hava an acoount" : "Create a new account"}</p>
    </form>
    <button onClick={props.googlelogin} className="btn"><img src={googleicon} width="40px" alt=""/>Continue with GOOGLE</button>
        </div>
    )
}

export default Login
