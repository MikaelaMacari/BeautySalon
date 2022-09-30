import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../variables.style";

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const DropdownContent = styled.div`
  font-family: ${fonts.primaryFont};
  width: 105px;
  font-size: ${fontSizes.sizeXS};
  color: ${colors.primaryGrayColor};
  &:hover,
  &:focus {
    color: ${colors.primaryTextColor};
    font-weight: 500;
    cursor: pointer;
  }
`;
export const DropdownOptionsContainer = styled.div`
  position: absolute;
  background-color: ${colors.secondaryBgColor};
  top: 30px;
  width: 130px;
  border: 1px solid ${colors.primaryBgColor};
`;
export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.primaryBgColor}; ;
`;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  border-bottom: 1px solid ${colors.primaryBgColor}; ;
`;
