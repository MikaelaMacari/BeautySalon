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
import { updateUser } from "../../store/auth";
import axios from "axios";
import Error from "../formElements/Error";

const validUser = {
  username: "root@domain.com",
  password: "12345678",
  name: "John Doe",
};

interface FormInputInterface {
  username: string;
  password: string | number | null;
}

const LoginForm = () => {
  const newUser = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set values in Redux store
  const updateNewUser = (data: any) => {
    dispatch(updateUser({ ...data }));
  };
  // const validateUser = (data: any) => {
  //   return new Promise((resolve, reject) => {
  //     if (data.username === validUser.username && data.password === validUser.password) {
  //       resolve(validUser);
  //     } else {
  //       reject("Invalid Credentials");
  //     }
  //   });
  // };
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
      const response = await axios.post("https://api.nanoit.dev/auth/login", { email: data.username, password: data.password });
      updateNewUser(response);
      navigate(`/`);
    } catch (e: any) {
      console.log(e);
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
        // pattern: {
        //   value: /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        //   message: "Please enter a valid password!",
        // },
      },
    },

    /*
        The password length must be greater than or equal to 8
        The password must contain one or more uppercase characters
        The password must contain one or more lowercase characters
        The password must contain one or more numeric values
        The password must contain one or more special characters
    */
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
