import React from "react";
import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "../../../assets/styles/components/formElements/Input.style";
import { FormInputInterface } from "../../orders/SelectServiceForm";

interface InputInterface {
  inputName: string | any;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FormInputInterface>;
  validationSchema: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  width?: string;
  readonly?: boolean;
  value?: string;
  handleChange?: (() => void) | undefined;
  display?: any;
}

const Input = ({ inputName, type, placeholder, register, validationSchema, width, readonly, value, handleChange, display }: InputInterface) => {
  return (
    <StyledInput
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
