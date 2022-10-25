import React, { useState, useRef } from "react";
import { DropdownContainer, DropdownContent } from "../../assets/styles/components/Header/DropdownMenu.style";
import chevronDown from "../../assets/icons/chevron-down.png";
import NavbarDropdown from "./NavbarDropdown";
import { useClickOutside } from "../../utils/clickOutside";
const DropdownMenu: React.FC = () => {
  const dropdownRef = useRef<any>();
  const [extendDropdown, setExtendDropdown] = useState(false);
  const openDropdown = () => {
    setExtendDropdown((currentState) => !currentState);
  };
  const hideItems = () => {
    setExtendDropdown(false);
  };
  useClickOutside(dropdownRef, hideItems);
  return (
    <>
      <DropdownContainer ref={dropdownRef} onClick={openDropdown}>
        <DropdownContent>Salon Registration</DropdownContent>
        <img src={chevronDown} alt="" />
        {extendDropdown && <NavbarDropdown />}
      </DropdownContainer>
    </>
  );
};

export default DropdownMenu;
