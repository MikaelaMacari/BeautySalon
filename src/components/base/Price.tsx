import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";

import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Error from "./Error";

interface PriceInterface {
  priceError: boolean;
  currencieError: boolean;
  getInputValue: (inputValue: number) => void;
  returnObject?: boolean;
}
const Price = ({ priceError, currencieError, returnObject = false, getInputValue }: PriceInterface) => {
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [priceValue, setPriceValue] = useState<string>("");

  const dispatch = useDispatch();

  const setPrice = (price: number) => {
    dispatch(updateOrder({ price }));
  };
  const handlePriceUpdate = (e: any) => {
    const price = e.target.value;
    setPriceValue(price);
    setPrice(price);
  };

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };
  const handleClick = (value: any) => {
    openDropdown();
    if (returnObject) {
      getInputValue(value);
    } else {
      getInputValue(value.id);
    }
    setValue(value.name);
  };

  const [isCurrencie, setIsCurrencie] = useState<boolean>(true);

  const priceInput = {
    id: 1,
    inputName: "currencie",
    type: "text",
    placeholder: "MDL",
    title: "Price",
    description: "Select currencie",
    list: currencies,
    readonly: true,
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={priceInput.title} description={priceInput.description} />
      </Grid>
      {isCurrencie && (
        <Grid item xs={10} sm={8} md={10} lg={4}>
          {/* <Input
            type={"number"}
            placeholder={"1200"}
            value={priceValue}
            inputName={"price"}
            readonly={false}
            handleChange={handlePriceUpdate}
            width={"270px"}
            error={priceError}
          /> */}
          {priceError && <Error errorMessage={"Please select a price!"} />}
        </Grid>
      )}
      <Grid item xs={10} sm={8} md={10} lg={4}>
        {/* <Input
          type={priceInput.type}
          placeholder={priceInput.placeholder}
          value={value}
          inputName={priceInput.inputName}
          readonly={priceInput.readonly}
          openDropdown={openDropdown}
          width={"270px"}
          error={currencieError}
        /> */}

        {isOpen && <Dropdown list={priceInput.list} handleClick={handleClick} />}
        {currencieError && <Error errorMessage={"Please choose a currencie!"} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default Price;
