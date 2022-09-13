import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import Header from "./Header";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import SelectRow from "./SelectRow";
import Date from "../base/Date";
import Time from "./Time";
import Price from "../base/Price";


const SelectService: React.FC = () => {
  const newOrder = useSelector((state: RootState) => state.orders.value);
 
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }; 

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(newOrder);
  };

  return (
    <>
      <Header />
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
         <SelectRow />
         <Date    
            title={"Date"} 
            description={"Select date"}   
            type={"date"}
            placeholder={"12.07.2022"}
            inputName={"date"}
            readonly={false}
          />
         <Time />
         <Price />
          <button onClick={handleClick}>Click</button>
        </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectService;
