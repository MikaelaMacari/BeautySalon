import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../store/orders";
import { useNavigate } from "react-router-dom";
import FormInput from "../base/formElements/FormInput";
import Textarea from "../base/formElements/Textarea";
import FormContainer from "../base/formElements/FormContainer";
import { StyledForm } from "../../assets/styles/components/formElements/Form.style";
import ButtonsContainer from "../base/buttons/ButtonsContainer";
import { Button } from "../base/buttons/Button";
import { RootState } from "../../store/types";
import { formInputRows } from "../../config/form/clientInformation";
interface FormInputInterface {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const ClientInformationForm = () => {
  const newOrder = useSelector((state: RootState) => state.orders.value);
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
  } = useForm<FormInputInterface>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: newOrder,
  });
  const onSubmit: SubmitHandler<FormInputInterface> = (data: FormInputInterface) => {
    updateNewOrder(data);
    navigate(`/orders/step/3`);
  };

  return (
    <>
      <FormContainer>
        <StyledForm error={false} onSubmit={handleSubmit(onSubmit)}>
          {formInputRows.map((row) => (
            <FormInput
              key={row.id}
              type={row.type}
              inputName={row.inputName}
              placeholder={row.placeholder}
              title={row.title}
              description={row.description}
              errors={errors}
              register={register}
              validationSchema={row.validationSchema}
            />
          ))}
          <Textarea title="Comments" inputName="comment" placeholder="Add some comments here.This field is optional" register={register} />
          <ButtonsContainer gap={true}>
            <Button title={"Back"} isNext={false} isBack={true} handleClick={() => navigate(-1)} />
            <Button title={"Next step"} isNext={true} />
          </ButtonsContainer>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default ClientInformationForm;
