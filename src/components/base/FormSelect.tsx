import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Dropdown from "./Dropdown";
import Input from "./Input";
import Label from "./Label";
import Error from "./Error";

interface FormInterface {
  inputName: string;
  type: string;
  placeholder: string;
  title: string;
  description: string;
  list?: { name: string; img?: string; id: number }[];
  readonly: boolean;
  getInputValue: (inputValue: number) => void;
  returnObject?: boolean;
  errorMessage: string;
  error: boolean;
  setInputValue?: any;
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
  error,
  errorMessage,
  setInputValue,
}: FormInterface) => {
  const [arrayValues, setArrayValues] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };
  const handleClick = (obj: any) => {
    openDropdown();
    if (returnObject) {
      getInputValue(obj);
    } else {
      getInputValue(obj.id);
    }
    setValue(obj.name);
    // setInputValue((prevValue: any) => ({
    //   ...prevValue,
    //   ...{ name: obj.name },
    // }));
    setInputValue((previousState: any) => {
      return { ...previousState, name: obj.name };
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={8}>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          inputName={inputName}
          readonly={readonly}
          openDropdown={openDropdown}
          width={"550px"}
          error={error}
        />
        {isOpen && <Dropdown list={list} handleClick={handleClick} />}
        {error && <Error errorMessage={errorMessage} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};

export default FormSelect;
