import styled from "styled-components";
import { fonts, fontSizes } from "../../variables.style";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 20px;
  padding-top: 50px;
`;
export const Title = styled.h2`
  font-family: ${fonts.secondaryFont};
  font-size: ${fontSizes.sizeXXL};
  font-weight: normal;
  text-transform: capitalize;
`;
