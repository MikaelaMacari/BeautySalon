import React from "react";
import { StyledInput } from "../../assets/styles/components/base/Input.style";

interface InputInterface {
  id: any;
  inputName?: string;
  type: string;
  placeholder: string;
  register: any;
  validationSchema: any;
  width?: string;
  readonly?: boolean;
  value?: string;
  openDropdown?: () => void;
  handleChange?: () => void;
}

const Input = ({
  id,
  inputName,
  type,
  placeholder,
  register,
  validationSchema,
  width,
  readonly,
  openDropdown,
  value,
  handleChange,
}: InputInterface) => {
  return (
    <StyledInput
      id={id}
      name={inputName}
      type={type}
      placeholder={placeholder}
      width={width}
      {...register(inputName, validationSchema)}
      readonly={readonly}
      onClick={openDropdown}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
