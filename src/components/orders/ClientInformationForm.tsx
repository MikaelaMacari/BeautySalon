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
import FormInput from "../base/FormInput";
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormInputInterface {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const ClientInformationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set values in Redux store
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
    navigate(`/orders/step/3`);
  };

  return (
    <>
      <FormContainer>
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title="Name" description="Enter your name" />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <input type="text" placeholder="Vasile Alexandri" {...register("name", { required: "Name field is required!" })} />
              <Error errorMessage={errors?.name?.message} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title="Phone" description="Enter your phone" />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <input
                type="text"
                placeholder="+373(_______)"
                {...register("phone", {
                  required: "Phone is required!",
                  pattern: {
                    value:
                      /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g,
                    message: "Please enter a valid phone!",
                  },
                })}
              />
              <Error errorMessage={errors?.phone?.message} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title="E-mail" description="Enter your email" />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email!",
                  },
                })}
              />
              <Error errorMessage={errors?.email?.message} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title="Comments" description="Enter your email" />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <textarea {...register("comment")} />
            </Grid>
          </Grid>
          {/* <FormInput
            register={register}
            errors={errors}
            type="text"
            placeholder="Vasile Alexandri"
            inputName="name"
            errorMessage="Name field must be specified!"
            title="Name"
            description="Enter your name"
          /> */}
          {/* SERVICE CATEGORY */}
          {/* <Grid container spacing={2}>
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
          </Grid> */}
          {/* SERVICE */}
          {/* <Grid container spacing={2}>
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
          </Grid> */}
          {/* MASTER */}
          {/* <Grid container spacing={2}>
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
          </Grid> */}
          {/* DATE */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <Label title={"Date"} description={"Select a date"} />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              <input type="date" {...register("date", { required: "Please select a date" })} />
              <Error errorMessage={errors?.date?.message} />
            </Grid>
          </Grid> */}
          {/* TIME */}
          {/* <Grid container spacing={2}>
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
          </Grid> */}
          {/* PRICE */}
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
export default ClientInformationForm;
