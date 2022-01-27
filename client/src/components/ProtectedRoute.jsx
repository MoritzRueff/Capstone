import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      element={({ location }) =>
        localStorage.getItem("userInfo") ? (
          element
        ) : (
          <Navigate
            to={{
              pathname: "/profile",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoute;
