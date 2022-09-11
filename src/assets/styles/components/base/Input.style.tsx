import styled from "styled-components";

import { colors, radius } from "../../variables.style";

export const StyledInput = styled.input`
  background-color: ${colors.inputBgColor};
  width: 550px;
  border-radius: ${radius.radiusS};
  padding: 12px 15px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.secondaryGrayColor};
  }
`;
