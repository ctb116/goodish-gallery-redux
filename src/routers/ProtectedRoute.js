import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const ProtectedRoute = props => {
  
  return (
    <Route
      render={() =>
        props.getSignInSuccess ? (
          <Redirect
          to={{
            pathname: "/admin",
          }}
        />
          ) : (
            <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
 
export default ProtectedRoute;