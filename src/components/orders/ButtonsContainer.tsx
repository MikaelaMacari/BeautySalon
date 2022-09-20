import React from "react";
import { Container } from "../../assets/styles/components/base/ButtonsContainer";
const ButtonsContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default ButtonsContainer;
