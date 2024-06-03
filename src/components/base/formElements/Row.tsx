import React from "react";
import { StyledRow, Title, Description } from "../../../assets/styles/components/formElements/Row.style";

interface RowInterface {
  title: string;
  description: string;
}
const Row = ({ title, description }: RowInterface) => {
  return (
    <StyledRow>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledRow>
  );
};

export default Row;
