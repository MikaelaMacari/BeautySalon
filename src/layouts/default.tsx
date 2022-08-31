import React from "react";
import { Header } from "../components/header";
import { PageContainer } from "../components/layout";
const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer />
      {children}
    </>
  );
};

export default DefaultLayout;
