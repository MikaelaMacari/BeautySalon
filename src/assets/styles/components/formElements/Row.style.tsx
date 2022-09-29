import styled from "styled-components";

import { colors, fonts, fontSizes } from "../../variables.style";
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 50px;
`;
export const Title = styled.p`
  font-family: ${fonts.beautyFont};
  font-size: ${fontSizes.sizeM};
  color: ${colors.secondaryTextColor};
  text-transform: capitalize;
`;
export const Description = styled.div`
  font-family: ${fonts.primaryFont};
  font-size: ${fontSizes.sizeXL};
  color: ${colors.secondaryTextColor};
  text-align: right;
  max-width: 10em;
  overflow: hidden;
  word-wrap: break-word;
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`;
