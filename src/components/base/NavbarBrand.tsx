import React from "react";
import { Link } from "react-router-dom";
import { BigLogo, Logo, LogoContainer } from "../../styles/NavbarBrand.style";
import smLogoUrl from "../../assets/img/logo_sm.png";
import bigLogoUrl from "../../assets/img/logo.png";
export default function NavbarBrand() {
  return (
    <LogoContainer>
      <Link to="/">
        <Logo src={smLogoUrl} />
        <BigLogo src={bigLogoUrl} />
      </Link>
    </LogoContainer>
  );
}
