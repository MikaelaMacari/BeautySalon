import React from "react";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import Error from "./Error";
import Input from "./Input";

type InputProps = {
  errors: any;
  // register: UseFormRegister<FormInputInterface>;
  register: any;
  type: string;
  title: string;
  description: string;
  placeholder: string;
  inputName: string;
  errorMessage: string;
};

const FormInput = ({ register, errors, type, title, description, placeholder, inputName, errorMessage }: InputProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={2}>
          <Label title={title} description={description} />
        </Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Input
            {...register({ inputName }, { required: { errorMessage } })}
            type={type}
            placeholder={placeholder}
            inputName={inputName}
            width={"550px"}
          />
          <Error errorMessage={errors?.date?.message} />
        </Grid>
      </Grid>
    </>
  );
};

export default FormInput;
