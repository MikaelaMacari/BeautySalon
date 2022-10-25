import React from "react";
import { useDispatch } from "react-redux";
import { DropdownOptionsContainer, OptionsContainer } from "../../assets/styles/components/Header/DropdownMenu.style";
import { NavbarLink } from "../../assets/styles/components/Header/Header.style";
import { logout } from "../../store/auth";
import { LinkInterface } from "../../ts/interfaces/links";

const links: LinkInterface[] = [
  { to: "/", text: "cart" },
  { to: "/", text: "profile" },
];

const NavbarDropdown: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <DropdownOptionsContainer>
      {links.map((link, index) => {
        return (
          <>
            <OptionsContainer key={`dropdown-item-${index}`}>
              <NavbarLink to={link.to}>{link.text}</NavbarLink>
            </OptionsContainer>
          </>
        );
      })}
      <OptionsContainer
        onClick={() => {
          dispatch(logout());
        }}
      >
        <NavbarLink to="/main">logout</NavbarLink>
      </OptionsContainer>
    </DropdownOptionsContainer>
  );
};

export default NavbarDropdown;
