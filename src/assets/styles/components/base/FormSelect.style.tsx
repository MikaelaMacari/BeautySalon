import styled from "styled-components";
import { colors, radius } from "../../variables.style";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 5px;
`;
export const StyledDropdown = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 16px;
`;

export const InputLabel = styled.div<{ width: string; isInputValue: boolean }>`
  background-color: ${colors.inputBgColor};
  color: ${(props) => (!props.isInputValue ? `${colors.secondaryGrayColor}` : `${colors.secondaryTextColor}`)};
  width: ${(props) => (props.width ? props.width : "550px")};
  border-radius: ${radius.radiusS};
  padding: 12px 15px;
  border: none;

  @media (max-width: 600px) {
    width: ${(props) => (props.width ? props.width : "350px")};
  }
  @media (max-width: 420px) {
    width: ${(props) => (props.width ? props.width : "250px")};
  }
`;
