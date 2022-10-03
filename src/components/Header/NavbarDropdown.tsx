import React from "react";
import { DropdownOptionsContainer, OptionsContainer } from "../../assets/styles/components/Header/DropdownMenu.style";
import { NavbarLink } from "../../assets/styles/components/Header/Header.style";
import { LinkInterface } from "../../ts/interfaces/links";
const links: LinkInterface[] = [
  { to: "/", text: "cart" },
  { to: "/", text: "profile" },
];

const NavbarDropdown: React.FC = () => {
  return (
    <DropdownOptionsContainer>
      {links.map((link, index) => {
        return (
          <OptionsContainer key={`dropdown-item-${index}`}>
            <NavbarLink to={link.to}>{link.text}</NavbarLink>
          </OptionsContainer>
        );
      })}
    </DropdownOptionsContainer>
  );
};

export default NavbarDropdown;
