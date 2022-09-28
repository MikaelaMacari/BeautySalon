import styled from "styled-components";

import { colors, fontSizes, radius } from "../../variables.style";

export const Select = styled.div`
  margin-top: 10px;
  background-color: ${colors.inputBgColor};
  max-width: 550px;
  border-radius: ${radius.radiusS};
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;
export const Option = styled.div`
  color: ${colors.secondaryGrayColor};
  font-size: ${fontSizes.sizeS};
  text-transform: capitalize;
  padding: 10px 16px;
  &:hover {
    background-color: red;
    color: ${colors.primaryTextColor};
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
