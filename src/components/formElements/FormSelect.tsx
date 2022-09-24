import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
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
  const [inputValue, setSelected] = useState<Record<string, any>>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };

  const handleClick = (value: any) => {
    openDropdown();
    setSelected(value);
  };

  const getValue = () => {
    if (inputValue) {
      return inputValue.id
    }

    return null
  }

  const getText = () => {
    if (inputValue) {
      return inputValue.name
    }

    return placeholder
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={8}>
        <div
          onClick={() => openDropdown()}
          style={{
          width: "100%",
          height: "100%"
        }}>{getText()}</div>
        <input
          style={{display: 'none'}}
          id={inputName}
          name={inputName}
          value={getValue()}
          readOnly
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
