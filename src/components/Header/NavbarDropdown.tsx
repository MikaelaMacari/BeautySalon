import { link } from "fs/promises";
import React from "react";
import { DropdownOptionsContainer, HorizontalDivider } from "../../assets/styles/components/Header/DropdownMenu.style";
import { NavbarLink } from "../../assets/styles/components/Header/Header.style";
import { LinkInterface } from "../../ts/interfaces/links";
const links: LinkInterface[] = [
  { to: "/", text: "cart" },
  { to: "/", text: "profile" },
];
function NavbarDropdown() {
  return (
    <DropdownOptionsContainer>
      {links.map((link, index) => {
        return (
          <>
            <NavbarLink key={index} to={link.to}>
              {link.text}
            </NavbarLink>
            <HorizontalDivider />
          </>
        );
      })}
    </DropdownOptionsContainer>
  );
}

export default NavbarDropdown;
