import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };
  const handleClick = (value: any) => {
    console.log(value);

    openDropdown();
    setinputValue(value.name);
  };
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
          readonly={true}
        />
        {errors && <Error errorMessage={errors["currencieId"]?.message} />}
        {isOpen && <Dropdown list={currencies} handleClick={handleClick} />}
      </Grid>
      <Grid item xs={2} sm={2} md={1} lg={2}>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  );
};
export default Price;
