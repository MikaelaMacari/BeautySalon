import React from "react";
import { Link } from "react-router-dom";
import smLogoUrl from "../../assets/images/logo_sm.png";
import bigLogoUrl from "../../assets/images/logo.png";
import { BigLogo, Container, Logo } from "../../assets/styles/components/Header/NavbarBrand.style";
export default function NavbarBrand() {
  return (
    <Container>
      <Link to="/">
        <Logo src={smLogoUrl} />
        <BigLogo src={bigLogoUrl} />
      </Link>
    </Container>
  );
}
