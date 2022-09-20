import React from "react";
import { StyledRow, Description, Title } from "../../assets/styles/components/base/Row.style";

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
