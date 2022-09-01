import React from "react";
import Header from "../components/layout/Header";
import PageContainer from "../components/layout/PageContainer";

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default DefaultLayout;
