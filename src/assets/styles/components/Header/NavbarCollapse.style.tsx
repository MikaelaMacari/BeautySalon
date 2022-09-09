import styled from "styled-components";
import { colors } from "../../variables.style";

export const Collapse = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
`;
export const NavbarNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 600px) {
    padding-right: 40px;
  }
`;
export const NavbarToggler = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  border: none;
  color: ${colors.primaryTextColor};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;
