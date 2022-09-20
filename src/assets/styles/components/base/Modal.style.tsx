import styled from "styled-components";
import { colors, fonts, fontSizes, radius } from "../../variables.style";

export const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${colors.primaryGrayColor};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledModal = styled.div`
  width: 400px;
  height: 240px;
  box-shadow: (0px 8px 16px rgba(0, 0, 0, 0.12));
  background-color: ${colors.secondaryBgColor};
  position: relative;
  z-index: 10;
  border-radius: ${radius.radiusS};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Title = styled.h2`
  font-family: ${fonts.primaryFont};
  font-size: ${fontSizes.sizeL};
  font-weight: 400;
  color: ${colors.primaryTextColor};
  text-align: center;
`;
export const Description = styled.p`
  font-family: ${fonts.primaryFont};
  font-size: ${fontSizes.sizeXS};
  color: ${colors.secondaryTextColor};
  text-align: center;
`;
export const OutlinedButton = styled.button`
  padding: 12px 24px;
  border: 1px solid ${colors.primaryTextColor};
  border-radius: 4px;
  color: ${colors.primaryTextColor};
  background: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryTextColor};
    color: ${colors.secondaryBgColor};
    transition: 0.2s ease-in;
  }
`;
export const PrimaryButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  color: ${colors.secondaryBgColor};
  background: ${colors.primaryTextColor};
  &:hover {
    background: transparent;
    color: ${colors.primaryTextColor};
    border: 1px solid ${colors.primaryTextColor};
    transition: 0.2s ease-in;
  }
`;
