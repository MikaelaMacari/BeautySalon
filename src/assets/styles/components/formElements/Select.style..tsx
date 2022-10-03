import styled from "styled-components";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { colors, fonts, fontSizes, radius } from "../../variables.style";

export const OptionsContainer = styled.div``;
export const Option = styled.div`
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

export const StyledSelect = styled(MuiAutocomplete)((props) => ({
  "& .MuiInputBase-root": {
    backgroundColor: `${colors.inputBgColor}`,
    borderRadius: ` ${radius.radiusS}`,
    cursor: "pointer",
    border: "none",
    outline: "none",
    margin: "0",
    padding: "0",
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
}));
