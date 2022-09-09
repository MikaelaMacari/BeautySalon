import styled from "styled-components";
import { colors } from "../../variables.style";

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
  background-color: #fff;
  top: 30px;
  width: 130px;
  border: 1px solid ${colors.primaryBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.primaryBgColor}; ;
`;
