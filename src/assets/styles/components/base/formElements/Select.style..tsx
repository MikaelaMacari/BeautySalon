import styled from "styled-components";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
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
export const StyledSelect = styled(MuiAutocomplete)((props) => ({
  "& .MuiInputBase-root": {
    backgroundColor: `${colors.inputBgColor}`,
    borderRadius: ` ${radius.radiusS}`,
    width: `${(props: any) => (props.width ? props.width : "550px")}`,
    cursor: "pointer",
    border: "none",
    outline: "none",
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSvgIcon-root": {
    display: "none",
  },
  "& input::placeholder": {
    fontFamily: `${fonts.primaryFont}`,
  },
  "& input.css-b7k0tb-MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused": {
    backgroundColor: `red`,
  },
  // "&& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused": {
  //   backgroundColor: `${colors.primaryTextColor}!important`,
  //   transition: " 0.3s ease-in",
  //   cursor: "pointer",
  // },
  "& 				.MuiAutocomplete-paper": {
    backgroundColor: `red`,
    // listStyle: "none",
    // margin: "10px",
    // padding: "20px 0",
    // maxHeight: "10vh",
    // overflow: "hidden",
  },
}));
