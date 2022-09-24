import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import { useDispatch } from "react-redux";
import { Button } from "../base";
import { updateOrder } from "../../store/orders";
import { useNavigate } from "react-router-dom";
import ButtonsContainer from "../base/ButtonsContainer";
import FormContainer from "../formElements/FormContainer";
import FormInput from "../formElements/FormInput";
import Textarea from "../formElements/Textarea";
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
  const formInputRows = [
    {
      id: 1,
      type: "text",
      inputName: "name",
      placeholder: "Vasile Alexandri",
      title: "Name",
      description: "Enter your name",
      validationSchema: {
        required: "Name field is required!",
      },
    },
    {
      id: 2,
      type: "tel",
      inputName: "phone",
      placeholder: "+373(_______)",
      title: "Phone",
      description: "Enter your phone",
      validationSchema: {
        required: "Phone field is required!",
        pattern: {
          value:
            /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g,
          message: "Please enter a valid phone!",
        },
      },
    },

    {
      id: 3,
      type: "email",
      inputName: "email",
      placeholder: "client@power-beauty.md",
      title: "E-mail",
      description: "Enter your email",
      validationSchema: {
        required: "Email field is required!",
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Please enter a valid email!",
        },
      },
    },
  ];
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
