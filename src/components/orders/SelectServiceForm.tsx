import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { Button } from "../base";
import { updateOrder } from "../../store/orders";
import { useNavigate } from "react-router-dom";
import Date from "../formElements/Date";
import FormContainer from "../formElements/FormContainer";
import Label from "../formElements/Label";
import Error from "../formElements/Error";
import Time from "../formElements/Time";
import Price from "../formElements/Price";
import FormSelect from "../formElements/FormSelect";
import Autocomplete from '../formElements/Autocomplete' 

interface FormInputInterface {
  serviceCategoryId: number;
  serviceId: number;
  masterId: number;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  currencieId: number;
  'test-autocomplete': string
}

const SelectServiceForm = () => {
  // Store lists
  const products = useSelector((state: RootState) => state.products.value);
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //FUNCTIONS -> Set values in Redux store
  const updateNewOrder = (data: any) => {
    dispatch(updateOrder({ ...data }));
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputInterface>();
  const onSubmit: SubmitHandler<FormInputInterface> = (data: FormInputInterface) => {
    console.log(data);
    updateNewOrder(data);
    navigate(`/orders/step/2`);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <Autocomplete control={control}/>
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          {/* SERVICE CATEGORY */}
          <Grid item xs={12} lg={12}>
            <Button title={"Next step"} isNext={true} />
          </Grid>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectServiceForm;
