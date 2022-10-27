import React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { updateOrder } from "../../store/orders";
import { useNavigate } from "react-router-dom";
import Date from "../base/formElements/Date";
import FormContainer from "../base/formElements/FormContainer";
import Time from "../base/formElements/Time";
import Price from "../base/formElements/Price";
import FormSelect from "../base/formElements/FormSelect";
import { StyledForm } from "../../assets/styles/components/formElements/Form.style";
import { Button } from "../base/buttons/Button";

export interface FormInputInterface {
  serviceCategoryId: number;
  serviceId: number;
  masterId: number;
  date: string;
  startTime: string;
  endTime: string;
  price: string;
  currencieId: number;
}

const SelectServiceForm = () => {
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const products = useSelector((state: RootState) => state.products.value);
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateNewOrder = (data: any) => {
    dispatch(updateOrder({ ...data }));
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputInterface>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: newOrder,
  });
  const onSubmit: SubmitHandler<FormInputInterface> = (data: FormInputInterface) => {
    updateNewOrder(data);
    navigate(`/orders/step/2`);
  };
  return (
    <>
      <Header />
      <FormContainer>
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          <FormSelect
            defaultValue={newOrder.serviceCategoryId}
            placeholder="Select from list"
            title="Service Category"
            description="Please select a service category"
            control={control}
            list={products}
            inputName="serviceCategoryId"
            rules={{
              required: { value: true, message: "Please select a service category!" },
            }}
            errors={errors}
          />
          <FormSelect
            defaultValue={newOrder.serviceId}
            title="Service"
            description="Please select a service"
            control={control}
            list={services}
            inputName="serviceId"
            rules={{
              required: { value: true, message: "Please select a service!" },
            }}
            placeholder="Select from list"
            errors={errors}
          />
          <FormSelect
            defaultValue={newOrder.masterId}
            title="Master"
            description="Please select a master"
            control={control}
            list={masters}
            inputName="masterId"
            rules={{
              required: { value: true, message: "Please select a master!" },
            }}
            placeholder="Select from list"
            errors={errors}
          />
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
          />
          <Time register={register} errors={errors} />
          <Price
            register={register}
            errors={errors}
            inputName="currencieId"
            control={control}
            list={currencies}
            placeholder="MDL"
            rules={{
              required: { value: true, message: "Please select a currencie!" },
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
