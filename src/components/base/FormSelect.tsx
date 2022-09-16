import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Dropdown from "./Dropdown";
import Input from "./Input";
import Label from "./Label";
import { updateOrder } from "../../store/orders";
import { useDispatch } from "react-redux";

interface FormInterface {
  inputName: string;
  type: string;
  placeholder: string;
  title: string;
  description: string;
  list?: { name: string; img?: string; id: number }[];
  readonly: boolean;
  getInputValue: (inputValue: number) => void;
  returnObject?: boolean;
  isCurrencie?: boolean;
}
const FormSelect = ({
  inputName,
  type,
  placeholder,
  title,
  description,
  list,
  readonly,
  getInputValue,
  returnObject = false,
  isCurrencie
}: FormInterface) => {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen]=useState<boolean>(false)
  const [priceValue, setPriceValue] = useState<string>("");

  const setPrice = (price: number) => {
    dispatch(updateOrder({ price }));
  };
  const dispatch = useDispatch();


  const handlePriceUpdate=(e:any) =>{
    const price = e.target.value
    setPriceValue(price);     
    setPrice(price);
  }
  
  const openDropdown = ()=>{
    setIsOpen((currentState) => !currentState)
  }
  const handleClick = (value: any) => {   
    openDropdown();
    if (returnObject) {
      getInputValue(value);
    } else {
      getInputValue(value.id);
    }
    setValue(value.name);    
   };


  return (
    <Grid container spacing={2}> 
      <Grid item xs={12} sm={2} md={1}  lg={2}> 
        <Label title={title} description={description} />       
      </Grid>
      {isCurrencie && (
         <Grid item xs={10} sm={8} md={10} lg={isCurrencie ? 4 : 8} >  
         <Input
             type={"number"}
             placeholder={"1200"}
             value={priceValue}
             inputName={"price"}
             readonly={false}
             handleChange={handlePriceUpdate}
             width={isCurrencie ? "270px" : "550px"}
           />         
       </Grid>
      )}
      <Grid item xs={10} sm={8} md={10} lg={isCurrencie ? 4 : 8} >  
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            inputName={inputName}
            readonly={readonly}
            openDropdown={openDropdown}
            width={isCurrencie ? "270px" : "550px"}
          />
          {isOpen &&(
            <Dropdown  list={list} handleClick={handleClick} />
          )}           
      </Grid>
      <Grid item xs={2} sm={2}  md={1} lg={2} > 
        <ExpandMoreIcon />       
      </Grid>
  </Grid>  
  );
};

export default FormSelect;
