import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../variables.style";
export interface HProps {
  extendNavbar: boolean;
}
export const Navbar = styled.nav<HProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "90px")};
  background-color: ${colors.secondaryBgColor};
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 600px) {
    padding-right: 40px;
  }
`;

export const NavbarLink = styled(Link)`
  font-family: Abel, sans-serif;
  text-decoration: none;
  text-transform: capitalize;
  margin: 10px;
  color: ${colors.primaryGrayColor};
  &:hover,
  &:focus {
    color: ${colors.primaryTextColor};
    font-weight: 500;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const VerticalDivider = styled.div`
  height: 16px;
  width: 1px;
  background-color: ${colors.secondaryGrayColor};
  align-self: center;
  margin: 0 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;
