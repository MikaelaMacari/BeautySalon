import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../formElements/FormInput";
import FormContainer from "../formElements/FormContainer";
import { PrimaryButton } from "../../assets/styles/components/formElements/Modal.style";
import { StyledForm } from "../../assets/styles/components/LoginContent.style";
import { ApiRoutes } from "../../ts/enum/apiRoutes";
import { login } from "../../store/auth";
import http from "../../services/http";

interface FormInputInterface {
  username: string;
  password: string | number | null;
}

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputInterface>({
    mode: "all",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormInputInterface> = async (data: FormInputInterface) => {
    try {
      const response = await http.post(ApiRoutes.Login, { email: data.username, password: data.password });
      dispatch(login(response));
      navigate(`/`);
    } catch (e: any) {
      navigate(`/main`);
    }
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
