import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../base/FormContainer";
import { RootState } from "../../store/types";
import Header from "./Header";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import SelectRow from "../base/SelectRow";
import Date from "../base/Date";
import Time from "../base/Time";
import Price from "../base/Price";
import { Button } from "../base";
import { useNavigate } from "react-router-dom";
import { updateOrder } from "../../store/orders";
import { useForm } from "react-hook-form";
import SelectServiceForm from "./SelectServiceForm";

interface SelectServiceInterface {
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface inputValuesInterface {
  // serviceCategory: string;
  // service: string;
  // master: string;
  // date: string;
  // startTime: string;
  // endTime: string;
  // price: number;
  // currencie: string;
}
const SelectService = () => {
  const inputValues: inputValuesInterface = {
    // serviceCategory: "",
    // service: "",
    // master: "",
    // date: "",
    // startTime: "",
    // endTime: "",
    // price: 0,
    // currencie: "",
  };
  const [inputValue, setInputValue] = useState<inputValuesInterface>(inputValues);
  const [serviceCategoryError, setServiceCategoryError] = useState<boolean>(false);
  const [serviceError, setServiceError] = useState<boolean>(false);
  const [masterError, setMasterError] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);
  const [currencieError, setCurrencieError] = useState<boolean>(false);
  // const newOrder = useSelector((state: RootState) => state.orders.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setCurrencie = (currencieId: number) => {
    dispatch(updateOrder({ currencieId }));
  };
  const validateInputs = () => {
    // console.log(newOrder);
    console.log("INPUT-VALUE: ", inputValue);
    // if (inputValue === "") {
    //   setServiceCategoryError((currentState) => !currentState);
    //   setServiceError((currentState) => !currentState);
    // }
    // if (!newOrder.serviceCategoryId) {
    //   setServiceCategoryError((currentState) => !currentState);
    // }
    // if (!newOrder.serviceId) {
    //   setServiceError((currentState) => !currentState);
    // }
    // if (!newOrder.masterId) {
    //   setMasterError((currentState) => !currentState);
    // }
    // if (newOrder.date === "") {
    //   setDateError((currentState) => !currentState);
    // }
    // if (newOrder.startTime === "") {
    //   setTimeError((currentState) => !currentState);
    // }
    // if (newOrder.price === 0) {
    //   setPriceError((currentState) => !currentState);
    // }
    // if (!newOrder.currencieId) {
    //   setCurrencieError((currentState) => !currentState);
    // }
  };
  // const handleSubmit = (e: React.FormEvent<EventTarget>) => {
  //   e.preventDefault();
  //   validateInputs();
  // };

  const handleClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // console.log(newOrder);
    navigate(`/orders/step/2`);
  };
  const { handleSubmit } = useForm();
  // console.log(newOrder);

  return (
    <>
      <Header />
      <FormContainer>
        <SelectServiceForm />
        {/* <StyledForm
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          error={formError}
        >
          <SelectRow
            serviceCategoryError={serviceCategoryError}
            serviceError={serviceError}
            masterError={masterError}
            setInputValue={setInputValue}
          />
          <Date
            title={"Date"}
            description={"Select date"}
            type={"date"}
            placeholder={"12.07.2022"}
            inputName={"date"}
            readonly={false}
            error={dateError}
            errorMessage={"Please select a date!"}
          />
          <Time error={timeError} />
          <Price priceError={priceError} currencieError={currencieError} getInputValue={setCurrencie} /> */}
        {/* <StyledLink to="/orders/step/2"> */}
        {/* <Button title={"Next step"} isNext={true}></Button> */}
        {/* </StyledLink> */}
        {/* </StyledForm> */}
      </FormContainer>
    </>
  );
};
export default SelectService;
