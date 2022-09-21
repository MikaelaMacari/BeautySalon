import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import { updateOrder } from "../../store/orders";
import Input from "./Input";
import Label from "./Label";
import Error from "./Error";

export interface DateInterface {
  inputName: string;
  type: string;
  placeholder: string;
  title: string;
  description: string;
  readonly: boolean;
  errorMessage: string;
  error: boolean;
}

const Date = ({ inputName, type, placeholder, title, description, readonly, errorMessage, error }: DateInterface) => {
  const setDate = (date: string) => {
    dispatch(updateOrder({ date }));
  };
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState<string>("");
  const handleDateUpdate = (e: any) => {
    const date = e.target.value;
    setDateValue(date);
    setDate(date);
  };

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={2} md={2}>
        <Label title={title} description={description} />
      </Grid>
      <Grid item xs={12} sm={10} md={10}>
        <Input
          type={type}
          placeholder={placeholder}
          value={dateValue}
          inputName={inputName}
          readonly={readonly}
          handleChange={handleDateUpdate}
          error={error}
        />
        {error && <Error errorMessage={errorMessage} />}
      </Grid> */}
    </Grid>
  );
};

export default Date;
