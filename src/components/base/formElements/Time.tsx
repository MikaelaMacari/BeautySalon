import React from "react";
import Grid from "@mui/material/Grid";

import Label from "./Label";
import Input from "./Input";
import Error from "./Error";
import { UseFormRegister } from "react-hook-form";
import { FormInputInterface } from "../../orders/SelectServiceForm";

interface TimeInterface {
  required?: boolean;
  width?: string;
  validationSchema?: { required?: string | undefined };
  errors?: any;
  register: UseFormRegister<FormInputInterface>;
  type?: string;
  title?: string;
  description?: string;
  placeholder?: string;
}

const Time = ({ register, errors }: TimeInterface) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={2} lg={2}>
        <Label title={"Time"} description={"Choose time"} />
      </Grid>
      <Grid item xs={10} sm={5} md={4} lg={4}>
        <Input
          inputName={"startTime"}
          type="time"
          placeholder="15:45"
          register={register}
          validationSchema={{ required: "Please select a starting hour!" }}
          width="260px"
        />
        {errors && <Error errorMessage={errors["startTime"]?.message} />}
      </Grid>
      <Grid item xs={10} sm={5} md={4} lg={4}>
        <Input
          inputName={"endTime"}
          type="time"
          placeholder="17:00"
          register={register}
          validationSchema={{ required: "Please select an ending hour!" }}
          width="260px"
        />
        {errors && <Error errorMessage={errors["endTime"]?.message} />}
      </Grid>
    </Grid>
  );
};

export default Time;
