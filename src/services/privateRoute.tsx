import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/types";

const PrivateRoute = ({ children, isPublic }: { children: JSX.Element; isPublic: boolean }) => {
  const authUser = useSelector((state: RootState) => state.auth.value);

  if (!authUser && !isPublic) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
