import React from "react";

import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Input from "./Input";
import Error from "./Error";
import Select from "./Select";
import { Control, UseFormRegister } from "react-hook-form";
import { FormInputInterface } from "../orders/SelectServiceForm";
import { ListInterface } from "../../ts/interfaces";

interface PriceInterface {
  required?: string;
  width?: string;
  validationSchema?: {
    required?: string | undefined;
    pattern?:
      | {
          value: RegExp;
          message: string;
        }
      | undefined;
  };
  errors?: any;
  register: UseFormRegister<FormInputInterface>;
  type?: string;
  title?: string;
  description?: string;
  placeholder: string;
  inputName: string;
  value?: string;
  control?: Control<FormInputInterface, any>;
  rules?: {
    required: {
      value: boolean;
      message: string;
    };
  };
  list: ListInterface[];
}
const Price = ({ inputName, register, errors, placeholder, list, rules, control }: PriceInterface) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={"Price"} description={"Select a price"} />
      </Grid>

      <Grid item xs={10} sm={8} md={10} lg={4}>
        <Input
          inputName={"price"}
          type="number"
          placeholder="1234.50"
          register={register}
          validationSchema={{
            required: "Price field is required!",
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid number!",
            },
          }}
          width="260px"
        />
        {errors && <Error errorMessage={errors["price"]?.message} />}
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={4}>
        <Select control={control} list={list} inputName={inputName} rules={rules} placeholder={placeholder} width="260px" />
        {errors && <Error errorMessage={errors[inputName]?.message} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default Price;
