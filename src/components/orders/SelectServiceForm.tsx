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
import { StyledLink } from "../../assets/styles/app.style";
import { useNavigate } from "react-router-dom";
import Date from "../formElements/Date";
import FormContainer from "../formElements/FormContainer";
import Label from "../formElements/Label";
import Error from "../formElements/Error";
import Time from "../formElements/Time";
import Price from "../formElements/Price";

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
  const getId = (arr: any, id: any) => {
    console.log(currencies);
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
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormInputInterface>();
  const handleClick = () => {
    navigate(`/orders/step/2`);
  };
  // console.log(errors);
  const handleChange = () => {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(data);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          {/* SERVICE CATEGORY */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
              <Label title={"Service category"} description="Select a service category"></Label>
            </Grid>
            <Grid item xs={12} lg={8}>
              <select {...register("serviceCategoryId", { required: "Please select a service category!" })} onChange={handleChange}>
                {products.map((product) => {
                  return (
                    <>
                      <option value="" selected hidden>
                        Select from list
                      </option>
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <Error errorMessage={errors?.serviceCategoryId?.message} />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={2}>
              <ExpandMoreIcon />
            </Grid>
          </Grid>
          {/* SERVICE */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
              <Label title={"Service"} description="Select a service"></Label>
            </Grid>
            <Grid item xs={12} lg={8}>
              <select {...register("serviceId", { required: "Please select a service!" })}>
                {services.map((service) => {
                  return (
                    <>
                      <option value="" selected hidden>
                        Select from list
                      </option>
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <Error errorMessage={errors?.serviceId?.message} />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={2}>
              <ExpandMoreIcon />
            </Grid>
          </Grid>
          {/* MASTER */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}>
              <Label title={"Master"} description="Select a master"></Label>
            </Grid>
            <Grid item xs={12} lg={8}>
              <select {...register("masterId", { required: "Please select a master!" })}>
                {masters.map((master) => {
                  return (
                    <>
                      <option value="" selected hidden>
                        Select from list
                      </option>
                      <option key={master.id} value={master.id}>
                        {master.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <Error errorMessage={errors?.masterId?.message} />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={2}>
              <ExpandMoreIcon />
            </Grid>
          </Grid>
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
          <Time register={register} errors={errors} />

          {/* PRICE */}
          <Price register={register} errors={errors} />

          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={1} lg={2}>
              <Label title={"Price"} description={"Select a price"} />
            </Grid>

            <Grid item xs={10} sm={8} md={10} lg={4}>
              <input type="number" {...register("price", { required: "Please select a price!" })} />
              <Error errorMessage={errors?.price?.message} />
            </Grid>

            <Grid item xs={10} sm={8} md={10} lg={4}>
              <select {...register("currencieId", { required: "Please select a currencie!" })}>
                {currencies.map((currencie) => {
                  return (
                    <>
                      <option value="" selected hidden>
                        Select from list
                      </option>
                      <option key={currencie.id} value={currencie.id}>
                        {currencie.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <Error errorMessage={errors?.currencieId?.message} />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={2}>
              <ExpandMoreIcon />
            </Grid>
          </Grid> */}
          <Grid item xs={12} lg={12}>
            {/* <input type="submit" /> */}
            {/* <StyledLink to="/orders/step/2"> */}
            <Button title={"Next step"} isNext={true} />
            {/* </StyledLink> */}
          </Grid>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectServiceForm;
