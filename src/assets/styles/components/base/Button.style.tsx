import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../variables.style";
interface Paddings {
  isNext?: boolean;
  isBack?: boolean;
}
export const StyledButton = styled.button<Paddings>`
  padding: ${(props) => (props.isNext && "12px 120px") || (props.isBack && "12px 50px") || "12px 100px"};
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
