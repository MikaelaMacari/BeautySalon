import { Link } from "react-router-dom";
import styled from "styled-components";
import chevronDown from "../assets/img/chevron-down.png";
interface HProps {
  extendNavbar: boolean;
}
export const HeaderContainer = styled.nav<HProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "90px")};
  background-color: var(--main-header-color);
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 600px) {
    padding-right: 40px;
  }
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NavbarLink = styled(Link)`
  font-family: Abel, sans-serif;
  text-decoration: none;
  text-transform: capitalize;
  margin: 10px;
  color: var(--primary-gray-color);
  &:hover,
  &:focus {
    color: var(--primary-text-color);
    font-weight: 500;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  font-family: Abel, sans-serif;
  text-decoration: none;
  text-transform: capitalize;
  margin: 10px;
  color: var(--primary-gray-color);
  &:hover,
  &:focus {
    color: var(--primary-text-color);
    font-weight: 500;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
`;
export const Logo = styled.img`
  max-width: 80px;
`;
export const BigLogo = styled.img`
  max-width: 170px;
`;
export const VerticalDivider = styled.div`
  height: 16px;
  width: 1px;
  background-color: var(--secondary-gray-color);
  align-self: center;
  margin: 0 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavbarToggler = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  border: none;
  color: var(--primary-text-color);
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--avatar-bg-color);
  border-radius: 50%;
  align-self: center;
  color: var(--main-header-color);
  font-family: Abel, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const DropdownContent = styled.div`
  width: 110px;
  font-size: 14px;
`;
export const DropdownOptionsContainer = styled.div`
  position: absolute;
  top: 30px;
  width: 130px;
  border: 1px solid var(--main-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--main-bg-color);
`;
