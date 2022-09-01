import React from "react";
import { Header } from "../components/layout/header";
import { PageContainer } from "../components/layout";

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default DefaultLayout;
