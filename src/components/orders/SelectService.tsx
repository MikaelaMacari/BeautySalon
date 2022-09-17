import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { RootState } from "../../store/types";
import Header from "./Header";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import SelectRow from "./SelectRow";
import Date from "../base/Date";
import Time from "./Time";
import Price from "../base/Price";
import { Button } from "../base";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../assets/styles/app.style";
import { updateOrder } from "../../store/orders";

const SelectService: React.FC = () => {
  // const [serviceCategoryError, setServiceCategoryError] = useState<boolean>(false);
  // const [serviceError, setServiceError] = useState<boolean>(false);
  // const [masterError, setMasterError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);
  const [currencieError, setCurrencieError] = useState<boolean>(false);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setCurrencie = (currencieId: number) => {
    dispatch(updateOrder({ currencieId }));
  };
  const validateInputs = () => {
    console.log(newOrder);
    // if (newOrder.serviceCategoryId === 0) {
    //   setServiceCategoryError((currentState) => !currentState);
    // }
    // if (newOrder.serviceId === 0) {
    //   setServiceError((currentState) => !currentState);
    // }
    // if (newOrder.masterId === 0) {
    //   setMasterError((currentState) => !currentState);
    // }
    if (newOrder.date === "") {
      setDateError((currentState) => !currentState);
    }
    if (newOrder.startTime === "") {
      setTimeError((currentState) => !currentState);
    }
    if (newOrder.price === 0) {
      setPriceError((currentState) => !currentState);
    }
    if (!newOrder.currencieId) {
      setCurrencieError((currentState) => !currentState);
    }
  };
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    validateInputs();
  };

  const handleClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // console.log(newOrder);
    navigate(`/orders/step/2`);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <StyledForm onSubmit={handleSubmit} error={error}>
          <SelectRow />
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
          <Price priceError={priceError} currencieError={currencieError} getInputValue={setCurrencie} />
          {/* <StyledLink to="/orders/step/2"> */}
          <Button title={"Next step"} isNext={true}></Button>
          {/* </StyledLink> */}
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectService;
