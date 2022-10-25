import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/types";

const PrivateRoute = ({ children, isPublic }: { children: JSX.Element; isPublic: boolean }) => {
  const authUser = useSelector((state: RootState) => state.auth.userInfo);

  if (!authUser && !isPublic) {
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default PrivateRoute;
