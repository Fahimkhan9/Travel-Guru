import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRef } from "react";
import googleicon from "../Icon/google.png";
import facebookicon from "../Icon/fb.png";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Userloggedin } from "../App";
import auth, { providerfb, providergoogle } from "./firebase";

function Login() {
  const [showlogin, setShowLogin] = useState(true);
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const [issignedin, setIssignedin] = useContext(Userloggedin);

  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const loginemail = (data) => {
    if (
      data.fname &&
      data.lname &&
      data.email &&
      data.password === data.confirmpassword
    ) {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          setIssignedin(true);
          history.replace(from);
          auth.currentUser
            .updateProfile({
              displayName: data.fname + " " + data.lname,
            })
            .then((res) => {})
            .catch((err) => alert(err));
        })
        .catch((err) => alert(err));
    }
    if (!data.fname && !data.lname && data.email && data.password) {
      auth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          setIssignedin(true);
          history.replace(from);
        })
        .catch((err) => alert(err));
    }
  };
  const googlelogin = () => {
    auth
      .signInWithPopup(providergoogle)
      .then((res) => {
        console.log(res);
        setIssignedin(true);
        history.replace(from);
        auth.currentUser.updateProfile({
          displayName: res.user.displayName,
        });
      })
      .catch((err) => alert(err));
  };

  const facebooklogin = () => {
    auth
      .signInWithPopup(providerfb)
      .then((res) => {
        alert("signin");
        history.replace(from);
        setIssignedin(true);
        console.log(res);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <Nav color="black" />
      <form
        onSubmit={handleSubmit(loginemail)}
        style={{ width: "400px", margin: "0px auto", padding: "5px" }}
      >
        <h1 style={{ textAlign: "center", paddingBottom: "5px" }}>
          {showlogin ? "Create an Account  " : "Log in"}
        </h1>
        {showlogin && (
          <div className="form-group">
            <input
              name="fname"
              className="form-control"
              ref={register({ required: true })}
              placeholder="First Name"
            />
            {errors.fname && <span>First Name is required</span>}
          </div>
        )}
        {showlogin && (
          <div className="form-group">
            <input
              name="lname"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Last Name"
            />
            {errors.lname && <span>Last Name is required</span>}
          </div>
        )}
        <div className="form-group">
          <input
            name="email"
            className="form-control"
            ref={register({ required: true })}
            placeholder="Email"
          />
          {errors.email && <span>Email is required</span>}
        </div>
        <div className="form-group">
          <input
            name="password"
            ref={passwordRef}
            className="form-control"
            ref={register({ required: true })}
            placeholder="Password"
          />
          {errors.password && <span>Password is required</span>}
        </div>
        {showlogin && (
          <div className="form-group">
            <input
              name="confirmpassword"
              ref={confirmpasswordRef}
              className="form-control"
              ref={register({ required: true })}
              placeholder="Confirm Password"
            />
            {errors.confirmpassword && (
              <span>Confirm Password is required</span>
            )}
          </div>
        )}

        <input type="submit" className="btn btn-warning btn-block" />
        <p
          className="text-primary text-center"
          style={{ cursor: "pointer" }}
          onClick={() => setShowLogin(showlogin ? false : true)}
        >
          {showlogin ? "Already Have an acoount?Login" : "Create a new account"}
        </p>
      </form>
      <div
        className="d-flex flex-column "
        style={{ width: "400px", margin: "0px auto" }}
      >
        <button onClick={googlelogin} className="btn bg-white ">
          <img src={googleicon} width="40px" alt="" />
          Continue with GOOGLE
        </button>
        <button onClick={facebooklogin} className="btn bg-white">
          <img src={facebookicon} width="40px" alt="" />
          Continue with FACEBOOK
        </button>
      </div>
    </div>
  );
}

export default Login;
