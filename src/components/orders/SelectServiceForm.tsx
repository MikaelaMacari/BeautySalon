import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormContainer from "../../assets/styles/components/orders/FormContainer";
import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import Label from "../base/Label";
import { Button } from "../base";
import { updateOrder } from "../../store/orders";
import Error from "../base/Error";
import { StyledLink } from "../../assets/styles/app.style";
import { useNavigate } from "react-router-dom";
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title={"Date"} description={"Select a date"} />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <input type="date" {...register("date", { required: "Please select a date" })} />
              <Error errorMessage={errors?.date?.message} />
            </Grid>
          </Grid>
          {/* TIME */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Label title={"Time"} description={"Choose time"} />
            </Grid>
            <Grid item xs={10} sm={5} md={4} lg={4}>
              <input type="time" {...register("startTime", { required: "Please select a starting hour!" })} />
              <Error errorMessage={errors?.startTime?.message} />
            </Grid>
            <Grid item xs={10} sm={5} md={4} lg={4}>
              <input type="time" {...register("endTime", { required: "Please select an ending hour!" })} />
              <Error errorMessage={errors?.endTime?.message} />
            </Grid>
          </Grid>
          {/* PRICE */}
          <Grid container spacing={2}>
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
          </Grid>
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
