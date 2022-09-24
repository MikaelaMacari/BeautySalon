import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";

import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "./Label";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Error from "./Error";
import { InputLabel } from "../../assets/styles/components/base/FormSelect.style";

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
const Price = ({ inputName, register, errors, validationSchema }: PriceInterface) => {
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValue, setIsInputValue] = useState<boolean>(false);
  const [inputId, setInputId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpen((currentState) => !currentState);
  };
  const handleClick = (value: any) => {
    console.log(value);

    openDropdown();
    setInputValue(value.name);
    setInputId(value.id);
    setIsInputValue(true);
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
        <InputLabel width="270px" onClick={() => openDropdown()} isInputValue={isInputValue}>
          {inputValue ? inputValue : "MDL"}
        </InputLabel>
        <Input
          display="none"
          id={inputName}
          inputName={"currencieId"}
          value={inputId}
          type="text"
          register={register}
          validationSchema={{
            required: "Please select a currencie!",
          }}
          readonly={true}
          placeholder="MDL"
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
