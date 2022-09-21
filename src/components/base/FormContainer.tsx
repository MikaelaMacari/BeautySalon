import React from "react";
import Container from "@mui/material/Container";

const FormContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container maxWidth="md">{children}</Container>;
};
export default FormContainer;
