import React from "react";
import Header from "../components/Header/Header";
const SharedLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SharedLayout;
