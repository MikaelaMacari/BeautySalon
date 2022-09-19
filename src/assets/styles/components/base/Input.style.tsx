import styled from "styled-components";

import { colors, radius } from "../../variables.style";

export const StyledInput = styled.input`
  background-color: ${colors.inputBgColor};
  width: ${(props) => (props.width ? props.width : "550px")};
  border-radius: ${radius.radiusS};
  padding: 12px 15px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.secondaryGrayColor};
  }
  @media (max-width: 600px) {
    width: ${(props) => (props.width ? props.width : "350px")};
  }
  @media (max-width: 420px) {
    width: ${(props) => (props.width ? props.width : "250px")};
  }
`;
