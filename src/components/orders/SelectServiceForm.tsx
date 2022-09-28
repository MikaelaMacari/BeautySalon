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
import Time from "../formElements/Time";
import Price from "../formElements/Price";
import FormSelect from "../formElements/FormSelect";
import Select from "../formElements/Select";

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
  const currencies = useSelector((state: RootState) => state.currencies.value);
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
  } = useForm<FormInputInterface>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
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
            placeholder="Select from list"
            title="Service Category"
            description="Please select a service category"
            control={control}
            list={products}
            inputName="serviceCategory"
            rules={{
              required: "Please select a service category!",
            }}
            errors={errors}
          />
          {/* SERVICES */}
          <FormSelect
            title="Service"
            description="Please select a service"
            control={control}
            list={services}
            inputName="services"
            rules={{
              required: "Please select a service!",
            }}
            placeholder="Select from list"
            errors={errors}
          />
          {/* MASTER */}
          <FormSelect
            title="Master"
            description="Please select a master"
            control={control}
            list={masters}
            inputName="masters"
            rules={{
              required: "Please select a master!",
            }}
            placeholder="Select from list"
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
          <Price
            register={register}
            errors={errors}
            inputName="currencies"
            control={control}
            list={currencies}
            placeholder="MDL"
            rules={{
              required: "Please select a currencie!",
            }}
          />
          <Grid item xs={12} lg={12}>
            <Button title={"Next step"} isNext={true} />
          </Grid>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectServiceForm;
