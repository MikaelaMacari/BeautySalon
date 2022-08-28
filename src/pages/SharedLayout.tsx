import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
