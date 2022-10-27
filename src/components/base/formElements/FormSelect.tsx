import React from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Error from "./Error";
import Select from "./Select";
import { Control } from "react-hook-form";
import { FormInputInterface } from "../../orders/SelectServiceForm";
import { ListInterface } from "../../../ts/interfaces";

interface FormSelectInterface {
  title?: string;
  description?: string;
  inputName: string;
  list: ListInterface[];
  control?: Control<FormInputInterface, any>;
  rules?: {
    required: {
      value: boolean;
      message: string;
    };
  };
  placeholder: string;
  errors?: any;
  defaultValue?: any;
}
const FormSelect = ({ inputName, list, title, description, control, rules, placeholder, errors, defaultValue }: FormSelectInterface) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={8}>
        <Select control={control} list={list} inputName={inputName} rules={rules} placeholder={placeholder} defaultValue={defaultValue} />
        {errors && <Error errorMessage={errors[inputName]?.message} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default FormSelect;
