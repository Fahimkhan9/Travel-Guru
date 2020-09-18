import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Userloggedin } from "../App";

function PrivateRoute({ children, ...rest }) {
  const [issignedin, setIssignedin] = useContext(Userloggedin);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          issignedin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;
