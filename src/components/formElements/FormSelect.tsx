import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Dropdown from "./Dropdown";
import Error from "./Error";
import Input from "./Input";
import { InputLabel } from "../../assets/styles/components/base/FormSelect.style";

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
const FormSelect = ({ inputName, register, errors, placeholder, validationSchema, list, title, description }: FormSelectInterface) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValue, setIsInputValue] = useState<boolean>(false);
  const [inputId, setInputId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };

  const handleClick = (value: any) => {
    openDropdown();
    setInputValue(value.name);
    setInputId(value.id);
    setIsInputValue(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={8}>
        <InputLabel width="550px" onClick={() => openDropdown()} isInputValue={isInputValue}>
          {inputValue ? inputValue : "Select from list"}
        </InputLabel>
        <Input
          display="none"
          id={inputName}
          inputName={inputName}
          value={inputId}
          type="text"
          register={register}
          validationSchema={validationSchema}
          readonly={true}
          placeholder={placeholder}
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
