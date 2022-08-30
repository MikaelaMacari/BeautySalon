import React, { useState } from "react";
import {
  Avatar,
  BigLogo,
  DropdownContainer,
  DropdownContent,
  DropdownOptionsContainer,
  HeaderContainer,
  LeftContainer,
  Logo,
  LogoContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  NavbarToggler,
  RightContainer,
  VerticalDivider,
} from "../../styles/Header.style";
import sm_logoUrl from "../../assets/img/logo_sm.png";
import bigLogoUrl from "../../assets/img/logo.png";
import chevronDown from "../../assets/img/chevron-down.png";
import NavbarDropdown from "../base/NavbarDropdown";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [extendDropdown, setExtendDropdown] = useState(false);
  const changeState = () => {
    setExtendNavbar((currentState) => !currentState);
  };
  const openDropdown = () => {
    setExtendDropdown((currentState) => !currentState);
  };
  return (
    <>
      <HeaderContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <LogoContainer>
              <Link to="/">
                <Logo src={sm_logoUrl} />
                <BigLogo src={bigLogoUrl} />
              </Link>
            </LogoContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/">help</NavbarLink>
              <NavbarLink to="/">orders</NavbarLink>
              <VerticalDivider />
              <NavbarLink to="/">
                <Avatar>RF</Avatar>
                {/* must be the name of user or the avatar of the user*/}
              </NavbarLink>
              <NavbarLink to="/">
                <DropdownContainer onClick={openDropdown}>
                  <DropdownContent>Salon Registration</DropdownContent>
                  <img src={chevronDown} alt="" />
                  {extendDropdown && <NavbarDropdown />}
                </DropdownContainer>
              </NavbarLink>
              <NavbarToggler onClick={changeState}>{extendNavbar ? <> &#215; </> : <> &#8801;</>}</NavbarToggler>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">help</NavbarLinkExtended>
            <NavbarLinkExtended to="/">orders</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Login</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Profile</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
