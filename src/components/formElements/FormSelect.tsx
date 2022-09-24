import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Error from "./Error";

interface FormSelectInterface {
  required?: any;
  width?: string;
  validationSchema?: any;
  errors?: any;
  register?: any;
  type?: any;
  title?: string;
  description?: string;
  placeholder?: any;
  inputName?: any;
  list?: any;
}
const FormSelect = ({ inputName, register, errors, type, placeholder, validationSchema, list, title, description }: FormSelectInterface) => {
  const [inputValue, setinputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };
  const handleClick = (value: any) => {
    openDropdown();
    setinputValue(value.name);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={8}>
        <Input
          id={inputName}
          inputName={inputName}
          type={type}
          placeholder={placeholder}
          register={register}
          validationSchema={validationSchema}
          openDropdown={openDropdown}
          value={inputValue}
        />
        {errors && <Error errorMessage={errors[inputName]?.message} />}
        {isOpen && <Dropdown list={list} handleClick={handleClick} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default FormSelect;
