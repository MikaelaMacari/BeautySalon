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
  required?: any;
  width?: string;
  validationSchema?: any;
  errors?: any;
  register?: any;
  type?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  inputName?: any;
  value?: string;
  openDropdown?: () => void;
}
const Price = ({ inputName, register, errors }: PriceInterface) => {
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const [inputValue, setinputValue] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [priceValue, setPriceValue] = useState<string>("");

  const dispatch = useDispatch();

  const setPrice = (price: number) => {
    dispatch(updateOrder({ price }));
  };
  // const handlePriceUpdate = (e: any) => {
  //   const price = e.target.value;
  //   setPriceValue(price);
  //   setPrice(price);
  // };

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
    console.log("OPEN DROPDOWN");
  };
  const handleClick = (value: any) => {
    console.log(value);

    openDropdown();
    setinputValue(value.name);
  };
  console.log(inputValue);
  const handleChange = () => {
    console.log(id);
  };
  // const priceInput = {
  //   id: 1,
  //   inputName: "currencie",
  //   type: "text",
  //   placeholder: "MDL",
  //   title: "Price",
  //   description: "Select currencie",
  //   list: currencies,
  //   readonly: true,
  // };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} md={1} lg={2}>
        <Label title={"Price"} description={"Select a price"} />
      </Grid>

      <Grid item xs={10} sm={8} md={10} lg={4}>
        <Input
          id={inputName}
          inputName={"price"}
          type="number"
          placeholder="1234.50"
          register={register}
          validationSchema={{
            required: "Please select a price!",
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid number!",
            },
          }}
          width="270px"
        />
        {errors && <Error errorMessage={errors["price"]?.message} />}
      </Grid>
      <Grid item xs={10} sm={8} md={10} lg={4}>
        <Input
          id={inputName}
          inputName={"currencieId"}
          type="text"
          placeholder="MDL"
          register={register}
          validationSchema={{
            required: "Please select a currencie!",
          }}
          openDropdown={openDropdown}
          width="270px"
          value={inputValue}
          handleChange={handleChange}
        />
        {errors && <Error errorMessage={errors["currencieId"]?.message} />}

        {isOpen && <Dropdown list={currencies} handleClick={handleClick} />}
        {/* {errors && <Error errorMessage={errors[inputName]?.message} />} */}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default Price;
/*
 <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={1} lg={2}>
              <Label title={"Price"} description={"Select a price"} />
            </Grid>

            <Grid item xs={10} sm={8} md={10} lg={4}>
              <input type="number" {...register("price", { required: "Please select a price!" })} />
              <Error errorMessage={errors?.price?.message} />
            </Grid>

            <Grid item xs={10} sm={8} md={10} lg={4}>
              <select {...register("currencieId", { required: "Please select a currencie!" })}>
                {currencies.map((currencie) => {
                  return (
                    <>
                      <option value="" selected hidden>
                        Select from list
                      </option>
                      <option key={currencie.id} value={currencie.id}>
                        {currencie.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <Error errorMessage={errors?.currencieId?.message} />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={2}>
              <ExpandMoreIcon />
            </Grid>
          </Grid>
*/
