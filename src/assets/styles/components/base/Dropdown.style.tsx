import styled from "styled-components";

import { colors, fonts, fontSizes, radius } from "../../variables.style";
export const StyledDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const DropdownTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primaryFont};
  align-items: flex-end;
  @media (max-width: 420px) {
    display: none;
  }
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.secondaryTextColor};
  text-align: right;
`;
export const TooltipText = styled.p`
  font-size: ${fontSizes.sizeXXS};
  color: ${colors.primaryGrayColor};
  text-align: right;
`;
export const Input = styled.select`
  font-size: ${fontSizes.sizeXXS};
  color: ${colors.primaryGrayColor};
  width: 550px;
  border-radius: ${radius.radiusS};
  padding: 12px 15px;
  color: ${colors.secondaryGrayColor};
  border: none;
  outline: none;
  scroll-behavior: smooth;
  -moz-appearance: none;
  -webkit-appearance: none;
`;
export const Placeholder = styled.option`
  color: ${colors.secondaryGrayColor};
  font-size: 20px;
  text-transform: capitalize;
  padding: 50px;
`;
// export const Option = styled.input`
//   color: ${colors.secondaryGrayColor};
//   font-size: 20px;
//   text-transform: capitalize;
//   padding: 50px;
// `;
