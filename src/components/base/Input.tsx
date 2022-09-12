import React from "react";
import { StyledInput } from "../../assets/styles/components/base/Input.style";

interface InputInterface {
  inputName: string;
  type: string;
  placeholder: string;
  value: string;
  readonly: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ inputName, type, placeholder, value, readonly }: InputInterface) => {
  return <StyledInput name={inputName} placeholder={placeholder} type={type} value={value} readOnly={readonly}></StyledInput>;
};

export default Input;
