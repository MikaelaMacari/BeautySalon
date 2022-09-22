import React from "react";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import Error from "./Error";
import Input from "./Input";

type InputProps = {
  required?: any;
  width?: string;
  validationSchema: any;
  errors: any;
  register: any;
  type: string;
  title: string;
  description: string;
  placeholder: string;
  inputName: string;
};

const FormInput = ({ inputName, register, errors, required, type, placeholder, width, validationSchema, title, description }: InputProps) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={2} md={2}>
      <Label title={title} description={description} />
    </Grid>
    <Grid item xs={12} sm={10} md={10}>
      <Input
        id={inputName}
        inputName={inputName}
        type={type}
        placeholder={placeholder}
        register={register}
        validationSchema={validationSchema}
        width={width}
      />
      {errors && <Error errorMessage={errors[inputName]?.message} />}
    </Grid>
  </Grid>
);
export default FormInput;
