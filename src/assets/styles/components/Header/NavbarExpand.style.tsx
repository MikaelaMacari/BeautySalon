import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../variables.style";

export const StyledNavbarExpand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`;
export const NavbarLink = styled(Link)`
  font-family: ${fonts.primaryFont};
  text-decoration: none;
  text-transform: capitalize;
  margin: 10px;
  color: ${colors.primaryGrayColor};
  &:hover,
  &:focus {
    color: ${colors.primaryTextColor};
    font-weight: 500;
  }
`;
