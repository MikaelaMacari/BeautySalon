import styled from "styled-components";

import { colors, fonts, fontSizes } from "../../variables.style";

export const StyledLabel = styled.div`
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
