import { NavbarLink, VerticalDivider } from "../../assets/styles/components/Header/Header.style";
import { Collapse, NavbarNav, NavbarToggler } from "../../assets/styles/components/Header/NavbarCollapse.style";
import NavbarBrand from "./NavbarBrand";

import { LinkInterface } from "../../ts/interfaces/links";
import Avatar from "./Avatar";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";

interface INavbarCollapse {
  extendNavbar: boolean;
  changeState: () => void;
}
const links: LinkInterface[] = [
  { to: "/", text: "" },
  { to: "/help", text: "help" },
  { to: "/oders", text: "orders" },
];

const NavbarCollapse = ({ extendNavbar, changeState }: INavbarCollapse) => {
  const authUser = useSelector((state: RootState) => state.auth.userInfo);

  function getFirstLetters(str: any) {
    const firstLetters = str
      .split(" ")
      .map((word: any) => word[0])
      .join("");

    return firstLetters;
  }
  const avatarName = authUser ? getFirstLetters(authUser.name) : "";
  const showTogglerIcon = () => {
    if (extendNavbar) {
      return <> &#215; </>;
    }
    return <> &#8801;</>;
  };
  return (
    <Collapse>
      <NavbarBrand />
      {authUser && (
        <NavbarNav>
          {links.map((link, index) => {
            return (
              <NavbarLink key={`navbar-link-${index}`} to={link.to}>
                {link.text}
              </NavbarLink>
            );
          })}

          <>
            <VerticalDivider />
            <Avatar userName={avatarName} />
            <DropdownMenu />
            <NavbarToggler onClick={changeState}>{showTogglerIcon()}</NavbarToggler>
          </>
        </NavbarNav>
      )}
    </Collapse>
  );
};
export default NavbarCollapse;
