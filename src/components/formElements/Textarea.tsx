import React from "react";
import Grid from "@mui/material/Grid";
import Label from "./Label";
import { StyledTextarea } from "../../assets/styles/components/formElements/Textarea.style";

interface TextareaInterface {
  register?: any;
  title: string;
  placeholder: string;
  inputName: string;
}

const Textarea = ({ inputName, register, placeholder, title }: TextareaInterface) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={2} md={2}>
      <Label title={title} />
    </Grid>
    <Grid item xs={12} sm={10} md={10}>
      <StyledTextarea id={inputName} name={inputName} placeholder={placeholder} {...register(inputName)} />
    </Grid>
  </Grid>
);
export default Textarea;
