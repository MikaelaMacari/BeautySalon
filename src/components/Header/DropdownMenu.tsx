import React, { useState } from "react";
import { DropdownContainer, DropdownContent } from "../../assets/styles/components/Header/DropdownMenu.style";
import chevronDown from "../../assets/icons/chevron-down.png";
import NavbarDropdown from "./NavbarDropdown";
const DropdownMenu = () => {
  const [extendDropdown, setExtendDropdown] = useState(false);
  const openDropdown = () => {
    setExtendDropdown((currentState) => !currentState);
  };
  return (
    <DropdownContainer onClick={openDropdown}>
      <DropdownContent>Salon Registration</DropdownContent>
      <img src={chevronDown} alt="" />
      {extendDropdown && <NavbarDropdown />}
    </DropdownContainer>
  );
};
export default DropdownMenu;
