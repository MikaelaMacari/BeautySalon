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

interface FormInputInterface {
  serviceCategoryId: number;
  serviceId: number;
  masterId: number;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  currencieId: number;
}

const SelectServiceForm = () => {
  // Store lists
  const products = useSelector((state: RootState) => state.products.value);
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //FUNCTIONS -> Set values in Redux store
  const updateNewOrder = (data: any) => {
    dispatch(updateOrder({ ...data }));
  };
  const {
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
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          {/* SERVICE CATEGORY */}
          <FormSelect
            inputName="serviceCategoryId"
            placeholder="Select from list"
            register={register}
            validationSchema={{
              required: "Please select a service category!",
            }}
            title="Service Category"
            description="Please select a service category"
            list={products}
            errors={errors}
          />
          {/* SERVICES */}
          <FormSelect
            inputName="serviceId"
            placeholder="Select from list"
            register={register}
            validationSchema={{
              required: "Please select a service!",
            }}
            title="Service"
            description="Please select a service"
            list={services}
            errors={errors}
          />
          {/* MASTER */}
          <FormSelect
            inputName="masterId"
            placeholder="Select from list"
            register={register}
            validationSchema={{
              required: "Please select a master!",
            }}
            title="Master"
            description="Please select a master"
            list={masters}
            errors={errors}
          />

          {/* DATE */}
          <Date
            title="Date"
            description="Select a date"
            inputName="date"
            placeholder="12.07.2022"
            register={register}
            errors={errors}
            type="date"
            validationSchema={{
              required: "Date field is required!",
            }}
            required
          />
          {/* Time */}
          <Time register={register} errors={errors} />

          {/* PRICE */}
          <Price register={register} errors={errors} />

          <Grid item xs={12} lg={12}>
            <Button title={"Next step"} isNext={true} />
          </Grid>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectServiceForm;
