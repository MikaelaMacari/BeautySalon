import React from "react";
import { useSelector } from "react-redux";

import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { RootState } from "../../store/types";
import Header from "./Header";
import { StyledForm } from "../../assets/styles/components/base/Form.style";
import SelectRow from "./SelectRow";
import Date from "../base/Date";
import Time from "./Time";
import Price from "../base/Price";
import { Button } from "../base";
import { Link, useNavigate } from "react-router-dom";
import { StyledLink } from "../../assets/styles/app.style";


const SelectService: React.FC = () => {
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const navigate = useNavigate();
 
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
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
         <StyledLink to="/orders/step/2">
          <Button  title={"Next step"} isNext={true}></Button>
         </StyledLink>
         </StyledForm>
      </FormContainer>
    </>
  );
};
export default SelectService;
