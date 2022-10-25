import { Container } from "@mui/material";
import React from "react";
import { FormContainer, Title } from "../assets/styles/components/LoginContent.style";
import LoginForm from "../components/login/LoginForm";
const Login: React.FC = () => {
  return (
    <>
      <Container maxWidth="md">
        <FormContainer>
          <Title>Login</Title>
          <LoginForm />
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
