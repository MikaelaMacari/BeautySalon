import React from "react";
import { StyledInput } from "../../assets/styles/components/base/Input.style";

interface InputInterface {
  inputName?: string;
  type: string;
  placeholder: string;
  value?: string;
  readonly: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openDropdown?: () => void;
  width?: string;
  error?: any;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
  getValue?: (value: string | undefined) => void;
}

const Input = ({ inputName, type, placeholder, value, readonly, openDropdown, handleChange, width, error }: InputInterface) => {
  return (
    <StyledInput
      name={inputName}
      placeholder={placeholder}
      type={type}
      value={value}
      readOnly={readonly}
      onClick={openDropdown}
      onChange={handleChange}
      width={width}
      // error={error}
    />
  );
};

export default Input;
