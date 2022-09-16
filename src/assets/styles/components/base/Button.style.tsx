import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../variables.style";

export const StyledButton = styled.button`
padding: 12px 120px;
gap: 5px;
display: flex;
justify-content: center;
align-items: center;
font-family: ${fonts.primaryFont};
font-size: ${fontSizes.sizeL};
background-color: ${colors.secondaryBgColor};
border: none;
text-decoration: none;
border-radius: 240px;
cursor: pointer;
&:hover {
   color: ${colors.primaryTextColor};
   background-color: ${colors.primaryTextColor};
   color: ${colors.secondaryBgColor};
   transition: 0.3s ease-in;
  }
`;
