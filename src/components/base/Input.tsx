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
  // value?: string;
  // readonly: boolean;
  // handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // openDropdown?: () => void;

  // error?: any;
  // setError?: React.Dispatch<React.SetStateAction<boolean>>;
  // getValue?: (value: string | undefined) => void;
}

const Input = ({ id, inputName, type, placeholder, register, validationSchema, width }: InputInterface) => {
  return <StyledInput id={id} name={inputName} type={type} placeholder={placeholder} width={width} {...register(inputName, validationSchema)} />;
};

export default Input;
