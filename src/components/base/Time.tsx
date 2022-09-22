import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import { updateOrder } from "../../store/orders";
import Label from "./Label";
import Input from "./Input";
import Error from "./Error";

interface TimeInterface {
  required?: any;
  width?: string;
  validationSchema?: any;
  errors?: any;
  register?: any;
  type?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  inputName?: any;
}

const Time = ({ inputName, register, errors }: TimeInterface) => {
  const dispatch = useDispatch();

  const [startTime, setStartTimeValue] = useState<string>("");
  const [endTime, setEndTimeValue] = useState<string>("");

  const setStartTime = (startTime: string) => {
    dispatch(updateOrder({ startTime }));
  };
  const setEndTime = (endTime: string) => {
    dispatch(updateOrder({ endTime }));
  };

  const startTimeUpdate = (e: any) => {
    const startTimeValue = e.target.value;
    setStartTimeValue(startTimeValue);
    setStartTime(startTimeValue);
  };
  const endTimeUpdate = (e: any) => {
    const endTimeValue = e.target.value;
    setEndTimeValue(endTimeValue);
    setEndTime(endTimeValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={2} lg={2}>
        <Label title={"Time"} description={"Choose time"} />
      </Grid>
      <Grid item xs={10} sm={5} md={4} lg={4}>
        <Input
          id={"startTime"}
          inputName={"startTime"}
          type="time"
          placeholder="15:45"
          register={register}
          validationSchema={{ required: "Please select a starting hour!" }}
          width="270px"
        />
        {errors && <Error errorMessage={errors["startTime"]?.message} />}
      </Grid>
      <Grid item xs={10} sm={5} md={4} lg={4}>
        <Input
          id={"endTime"}
          inputName={"endTime"}
          type="time"
          placeholder="17:00"
          register={register}
          validationSchema={{ required: "Please select an ending hour!" }}
          width="270px"
        />
        {errors && <Error errorMessage={errors["endTime"]?.message} />}
      </Grid>
    </Grid>
  );
};

export default Time;
