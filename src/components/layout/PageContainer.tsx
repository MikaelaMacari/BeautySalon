import React from "react";
import Container from "../../assets/styles/components/layout/PageContainer";
const PageContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};
export default PageContainer;
