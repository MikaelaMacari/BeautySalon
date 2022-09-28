import styled from "styled-components";

import { colors, fonts, fontSizes, radius } from "../../variables.style";

export const StyledTextarea = styled.textarea`
  width: 550px;
  height: 140px;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: ${radius.radiusS};
  background-color: ${colors.inputBgColor};
  font-size: ${fontSizes.sizeS};
  font-family: ${fonts.primaryFont};
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.secondaryGrayColor};
  }
`;
