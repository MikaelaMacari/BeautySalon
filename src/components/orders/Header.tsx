import React from "react";
import { useParams } from "react-router-dom";
import { Step, StyledHeader, Title } from "../../assets/styles/components/orders/Header.style";
import { NUMBER_OF_STEPS } from "../../ts/constants/orders";
const steps = ["Select service", "Client information", "Finish Order"];

const Header: React.FC = () => {
  const { stepId } = useParams();
  const nameOfStep = steps.map((step, index) => (index + 1 === Number(stepId) ? step : ""));
  return (
    <StyledHeader>
      <Title>Register new order</Title>
      <Step>
        Step {stepId}/{NUMBER_OF_STEPS} - {nameOfStep}
      </Step>
    </StyledHeader>
  );
};

export default Header;
