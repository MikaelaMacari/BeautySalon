import React, { useState } from "react";
import {
  Avatar,
  DropdownContainer,
  DropdownContent,
  DropdownOptionsContainer,
  HeaderContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  NavbarToggler,
  RightContainer,
  VerticalDivider,
} from "../../styles/Header.style";

import chevronDown from "../../assets/img/chevron-down.png";
import NavbarDropdown from "../base/NavbarDropdown";
import { Link } from "react-router-dom";
import { LinkInterface } from "../../ts/interfaces";
import NavbarBrand from "../base/NavbarBrand";

const Header: React.FC = () => {
  const links: LinkInterface[] = [
    { to: "/", text: "home" },
    { to: "/", text: "help" },
    { to: "/", text: "orders" },
    { to: "/", text: "cart" },
    { to: "/", text: "profile" },
  ];
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
            <NavbarBrand />
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
            <NavbarLinkExtended to="/">Cart</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Profile</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
