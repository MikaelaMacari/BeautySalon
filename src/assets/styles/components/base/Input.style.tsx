import styled from "styled-components";

import { colors, radius } from "../../variables.style";

export const StyledInput = styled.input<{ error: boolean }>`
  background-color: ${colors.inputBgColor};
  width: ${(props) => (props.width ? props.width : "550px")};
  border-radius: ${radius.radiusS};
  padding: 12px 15px;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
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
