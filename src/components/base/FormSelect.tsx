import React, { ChangeEvent, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { StyledContainer, StyledDropdown } from "../../assets/styles/components/base/FormSelect.style";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Label from "./Label";

export interface FormInterface {
  inputName: string;
  type: string;
  placeholder: string;
  title: string;
  description: string;
  list: { name: string; img: string; id: number }[];
  readonly: boolean;
}

const FormSelect = ({ inputName, type, placeholder, title, description, list, readonly }: FormInterface) => {
  const [value, setValue] = useState<string>("");
  const handleClick = (value: string) => {
    setValue(value);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  console.log(value);

  return (
    <StyledContainer>
      <StyledDropdown>
        <Label title={title} description={description} />
        <Input type={type} placeholder={placeholder} value={value} inputName={inputName} readonly={readonly} handleChange={handleChange} />
        <ExpandMoreIcon />
      </StyledDropdown>
      <Dropdown list={list} handleClick={handleClick} />
    </StyledContainer>
  );
};

export default FormSelect;
