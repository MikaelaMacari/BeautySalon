import styled from "styled-components";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import { colors, fonts, fontSizes, radius } from "../../../variables.style";

export const LabelSelect = styled.label`
  position: relative;
  display: inline-block;
  font-family: ${fonts.primaryFont};
  font-size: ${fontSizes.sizeS};
  color: ${colors.secondaryGrayColor};
  width: 550px;
`;
export const CustomSelect = styled.select`
  background-color: ${colors.inputBgColor};
  border-radius: ${radius.radiusS};
  width: 100%;
  padding: 12px 15px;
  cursor: pointer;

  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 5px; */
`;
export const Option = styled.option`
  color: ${colors.secondaryGrayColor};
  font-size: ${fontSizes.sizeS};
  text-transform: capitalize;
  padding: 10px 16px;
  &:hover {
    color: ${colors.primaryTextColor};
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
export const StyledDropdown = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 16px;
`;
