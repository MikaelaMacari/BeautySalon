import { NavbarLink, VerticalDivider } from "../../assets/styles/components/Header/Header.style";
import { Collapse, NavbarNav, NavbarToggler } from "../../assets/styles/components/Header/NavbarCollapse.style";
import NavbarBrand from "./NavbarBrand";

import { LinkInterface } from "../../ts/interfaces/links";
import Avatar from "./Avatar";
import DropdownMenu from "./DropdownMenu";

interface INavbarCollapse {
  extendNavbar: boolean;
  changeState: () => void;
}
const links: LinkInterface[] = [
  { to: "/", text: "" },
  { to: "/", text: "help" },
  { to: "/", text: "orders" },
];

const NavbarCollapse = ({ extendNavbar, changeState }: INavbarCollapse) => {
  const showTogglerIcon = () => {
    if (extendNavbar) {
      return <> &#215; </>;
    }
    return <> &#8801;</>;
  };
  return (
    <Collapse>
      <NavbarBrand />
      <NavbarNav>
        {links.map((link, index) => {
          return (
            <NavbarLink key={`navbar-link-${index}`} to={link.to}>
              {link.text}
            </NavbarLink>
          );
        })}
        <VerticalDivider />
        <Avatar />
        <DropdownMenu />
        <NavbarToggler onClick={changeState}>{showTogglerIcon()}</NavbarToggler>
      </NavbarNav>
    </Collapse>
  );
};
export default NavbarCollapse;
