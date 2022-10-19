import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../store/orders";
import { useNavigate } from "react-router-dom";
import FormInput from "../formElements/FormInput";
import FormContainer from "../formElements/FormContainer";
import { RootState } from "../../store/types";
import { PrimaryButton } from "../../assets/styles/components/formElements/Modal.style";
import { StyledForm } from "../../assets/styles/components/LoginContent.style";
interface FormInputInterface {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const LoginForm = () => {
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
  // const onSubmit: SubmitHandler<FormInputInterface> = (data: FormInputInterface) => {
  //   updateNewOrder(data);
  //   navigate(`/orders/step/3`);
  // };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const formInputRows = [
    {
      id: 1,
      type: "text",
      inputName: "username",
      placeholder: "Username",
      title: "Username",
      description: "Enter your username",
      validationSchema: {
        required: "Username field is required!",
      },
    },
    {
      id: 2,
      type: "password",
      inputName: "password",
      placeholder: "Password",
      title: "Password",
      description: "Enter your password",
      validationSchema: {
        required: "Password field is required!",
      },
    },

    // {
    //   id: 3,
    //   type: "email",
    //   inputName: "email",
    //   placeholder: "client@power-beauty.md",
    //   title: "E-mail",
    //   description: "Enter your email",
    //   validationSchema: {
    //     required: "Email field is required!",
    //     pattern: {
    //       value:
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       message: "Please enter a valid email!",
    //     },
    //   },
    // },
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
          <PrimaryButton>Sign in</PrimaryButton>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default LoginForm;
