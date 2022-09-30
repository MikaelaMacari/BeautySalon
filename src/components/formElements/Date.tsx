import React from "react";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import Input from "./Input";
import Error from "./Error";
import { FormInputInterface } from "../orders/SelectServiceForm";
import { UseFormRegister } from "react-hook-form";

export interface DateInterface {
  width?: string;
  validationSchema: { required?: string };
  errors: any;
  register: UseFormRegister<FormInputInterface>;
  type: string;
  title: string;
  description: string;
  placeholder: string;
  inputName: string;
}

const Date = ({ inputName, register, errors, type, placeholder, width, validationSchema, title, description }: DateInterface) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={12} sm={10} md={10}>
        <Input inputName={inputName} type={type} placeholder={placeholder} register={register} validationSchema={validationSchema} width={width} />
        {errors && <Error errorMessage={errors[inputName]?.message} />}
      </Grid>
    </Grid>
  );
};

export default Date;
