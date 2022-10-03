import styled from "styled-components";
import { colors, fonts, fontSizes, radius } from "../../variables.style";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-top: 85px;
  padding-left: 90px;
  margin-bottom: 120px;
  gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
  }
`;
export const Title = styled.h2`
  font-size: ${fontSizes.sizeXXXL};
  font-family: ${fonts.primaryFont};
  font-weight: 400;
  color: ${colors.primaryTextColor};
  @media (max-width: 420px) {
    font-size: ${fontSizes.sizeXXL};
  }
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  font-size: ${fontSizes.sizeL};
  background-color: ${colors.titleBgColor};
  border-radius: ${radius.radiusXS};
  @media (max-width: 420px) {
    font-size: ${fontSizes.sizeS};
  }
`;
