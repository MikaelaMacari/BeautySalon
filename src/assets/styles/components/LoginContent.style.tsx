import styled from "styled-components";
import { colors, fonts, fontSizes } from "../variables.style";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 70vh;
  gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
  }
`;
export const StyledForm = styled.form<{ error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  gap: ${(props) => (props.error ? "50px" : "30px")};
`;

export const Title = styled.h1`
  font-size: ${fontSizes.sizeXXXL};
  font-family: ${fonts.primaryFont};
  font-weight: 400;
  color: ${colors.primaryTextColor};
  @media (max-width: 420px) {
    font-size: ${fontSizes.sizeXXL};
  }
`;
