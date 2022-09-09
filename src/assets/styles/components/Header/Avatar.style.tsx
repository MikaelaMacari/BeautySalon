import styled from "styled-components";
import { colors } from "../../variables.style";

export const StyledAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${colors.avatarBgColor};
  border-radius: 50%;
  align-self: center;
  color: ${colors.secondaryBgColor};
  font-family: Abel, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
