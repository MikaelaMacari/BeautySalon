import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { history } from "../helpers/history";
import { RootState } from "../store/types";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authUser = useSelector((state: RootState) => state.auth.value);

  if (!authUser) {
    // return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
