import React from "react";
import { StyledInput } from "../../assets/styles/components/formElements/Input.style";

interface InputInterface {
  id: any;
  inputName?: string;
  type: string;
  placeholder?: string;
  register: any;
  validationSchema?: any;
  width?: string;
  readonly?: boolean;
  value?: string;
  openDropdown?: () => void;
  handleChange?: (() => void) | undefined;
  display?: any;
}

const Input = ({ id, inputName, type, placeholder, register, validationSchema, width, readonly, value, handleChange, display }: InputInterface) => {
  return (
    <StyledInput
      id={id}
      name={inputName}
      type={type}
      placeholder={placeholder}
      width={width}
      {...register(inputName, validationSchema)}
      readOnly={readonly}
      value={value}
      onChange={handleChange}
      display={display}
    />
  );
};

export default Input;
