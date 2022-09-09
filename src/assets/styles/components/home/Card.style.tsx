import styled from "styled-components";
import { fontSizes, height, radius, width } from "../../variables.style";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${width.widthXS};
  height: ${height.heightL};
`;
export const CardImg = styled.img`
  width: 100%;
  border-radius: ${radius.radiusS};
  width: ${width.widthXS};
  height: ${height.heightM};
`;
export const CardBody = styled.div`
  width: ${width.widthXS};
  height: ${height.heightM};
`;
export const CardTitle = styled.p`
  font-size: ${fontSizes.sizeS};
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
`;
