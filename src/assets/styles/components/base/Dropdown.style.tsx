import styled from "styled-components";

import { colors, fontSizes, radius } from "../../variables.style";

export const Select = styled.div`
  background-color: ${colors.inputBgColor};
  width: 550px;
  border-radius: ${radius.radiusS};
`;
export const Option = styled.div`
  color: ${colors.secondaryGrayColor};
  font-size: ${fontSizes.sizeS};
  text-transform: capitalize;
  padding: 10px 16px;
  &:hover {
    color: ${colors.primaryTextColor};
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
