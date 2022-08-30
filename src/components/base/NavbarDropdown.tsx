import React from "react";
import { DropdownOptionsContainer, HorizontalDivider, NavbarLink } from "../../styles/Header.style";

function NavbarDropdown() {
  return (
    <DropdownOptionsContainer>
      <NavbarLink to="/">Cart</NavbarLink>
      <HorizontalDivider />
      <NavbarLink to="/">Profile</NavbarLink>
    </DropdownOptionsContainer>
  );
}

export default NavbarDropdown;
