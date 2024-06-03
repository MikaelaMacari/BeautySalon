import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../assets/styles/components/formElements/Modal.style";
import { Hero, Title, Description } from "../../assets/styles/components/MainContent.style";

const Content: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Hero>
        <Title>Power Beauty</Title>
        <Description>
          Customised beauty and skincare has grown in popularity in the past few years, enabling brands to deliver.While this is part of Function of
          Power Beauty, it also acts as a clever piece of content marketing in its own right, helping to hook in the consumer – and their long-term
          loyalty.
        </Description>
        <Link to="/login">
          <PrimaryButton>Sign in</PrimaryButton>
        </Link>
      </Hero>
    </Container>
  );
};

export default Content;
