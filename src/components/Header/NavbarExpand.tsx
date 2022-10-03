import React from "react";
import { NavbarLink, StyledNavbarExpand } from "../../assets/styles/components/Header/NavbarExpand.style";
import { LinkInterface } from "../../ts/interfaces/links";
const links: LinkInterface[] = [
  { to: "/", text: "help" },
  { to: "/", text: "orders" },
  { to: "/", text: "cart" },
  { to: "/", text: "profile" },
];
const NavbarExpand: React.FC = () => {
  return (
    <StyledNavbarExpand>
      {links.map((link, index) => {
        return (
          <NavbarLink key={index} to={link.to}>
            {link.text}
          </NavbarLink>
        );
      })}
    </StyledNavbarExpand>
  );
};

export default NavbarExpand;
