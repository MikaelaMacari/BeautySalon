import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  StyledContainer,
  StyledDropdown,
} from "../../assets/styles/components/base/FormSelect.style";
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
  getInputValue: (inputValue: number) => void;
  returnObject?: boolean;
}
export interface ValueInterface {
  name: string; img: string; id: number 
}
const FormSelect = ({
  inputName,
  type,
  placeholder,
  title,
  description,
  list,
  readonly,
  getInputValue,
  returnObject = false,
}: FormInterface) => {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen]=useState<boolean>(false)
  const openDropdown = ()=>{
    setIsOpen((currentState) => !currentState)
  }
  const handleClick = (value: any) => {
    setValue(value.name);
    openDropdown();
    if (returnObject) {
      getInputValue(value);
    } else {
      getInputValue(value.id);
    }
    
  };
  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setValue(e.target.value);
  // };

  return (
    <StyledContainer>
      <StyledDropdown>
        <Label title={title} description={description} />
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          inputName={inputName}
          readonly={readonly}
          openDropdown={openDropdown}
        />
        <ExpandMoreIcon />
      </StyledDropdown>
      {isOpen &&(
        <Dropdown  list={list} handleClick={handleClick} />
      )}
    </StyledContainer>
  );
};

export default FormSelect;
