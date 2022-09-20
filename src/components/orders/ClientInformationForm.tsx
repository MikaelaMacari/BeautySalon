import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import { useDispatch } from "react-redux";
import Label from "../base/Label";
import { Button } from "../base";
import { updateOrder } from "../../store/orders";
import Error from "../base/Error";
import { useNavigate } from "react-router-dom";
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button title={"Back"} isNext={false} isBack={true} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button title={"Next step"} isNext={true} />
            </Grid>
          </Grid>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default ClientInformationForm;
