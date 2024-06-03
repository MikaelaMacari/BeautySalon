import React from "react";
import { Container } from "../../../assets/styles/components/buttons/ButtonsContainer.style";
const ButtonsContainer = ({ children, gap }: { children: JSX.Element | JSX.Element[]; gap: boolean }) => {
  return <Container gap={gap}>{children}</Container>;
};

export default ButtonsContainer;
