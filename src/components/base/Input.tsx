import React from "react";
import { StyledInput } from "../../assets/styles/components/base/Input.style";

interface InputInterface {
  inputName: string;
  type: string;
  placeholder: string;
  value: string;
  readonly: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ inputName, type, placeholder, value, readonly, handleChange }: InputInterface) => {
  return <StyledInput name={inputName} placeholder={placeholder} type={type} value={value} readOnly={readonly} onChange={handleChange}></StyledInput>;
};

export default Input;
