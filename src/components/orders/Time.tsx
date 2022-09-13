import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';

import { updateOrder } from "../../store/orders";
import Label from "../base/Label";
import Input from "../base/Input";
export interface DateInterface {
  inputName: string;
  type: string;
  placeholder: string;
  title: string;
  description: string;
  readonly: boolean;
}

const Time: React.FC = ()=> {
  const dispatch = useDispatch();

  const [startTime, setStartTimeValue] = useState<string>("");
  const [endTime, setEndTimeValue] = useState<string>("");

  const setStartTime = (startTime: string) => {
    dispatch(updateOrder({ startTime }));
  };
  const setEndTime = (endTime: string) => {
    dispatch(updateOrder({ endTime }));
  };

  const startTimeUpdate=(e:any) =>{
    const startTimeValue = e.target.value
    setStartTimeValue(startTimeValue);     
    setStartTime(startTimeValue);
  }
  const endTimeUpdate=(e:any) =>{
    const endTimeValue = e.target.value
    setEndTimeValue(endTimeValue);     
    setEndTime(endTimeValue);
  }
  
  return (
        <Grid container spacing={2}> 
          <Grid item xs={12} sm={2} md={2}  lg={2}> 
            <Label title={"Time"} description={"Choose time"} />       
          </Grid>          
          <Grid item xs={10} sm={5} md={4} lg={4} >  
            <Input
              type={"time"}
              placeholder={"15:45"}
              value={startTime}
              inputName={"startTime"}
              readonly={false}
              handleChange={startTimeUpdate}
              width="270px" 
            />            
          </Grid>
          <Grid item xs={10} sm={5}  md={4} lg={4} > 
            <Input
              type={"time"}
              placeholder={"17:45"}
              value={endTime}
              inputName={"endTime"}
              readonly={false}
              handleChange={endTimeUpdate} 
              width="270px"
            />           
          </Grid>
        </Grid>  
  );
};

export default Time;
