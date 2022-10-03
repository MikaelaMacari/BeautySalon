import React from "react";
import { TextField, Divider } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { Option, OptionsContainer, StyledSelect } from "../../assets/styles/components/formElements/Select.style.";
import { FormInputInterface } from "../orders/SelectServiceForm";
import { ListInterface } from "../../ts/interfaces";

interface SelectInterface {
  control?: Control<FormInputInterface, any>;
  list: ListInterface[];
  inputName: any;
  rules?: {
    required: {
      value: boolean;
      message: string;
    };
  };
  placeholder: string;
  width?: string;
  defaultValue?: any;
}
const Select = ({ control, list, inputName, rules, placeholder, width, defaultValue }: SelectInterface) => {
  const getSelectValue = (value: number) => {
    const index = list.findIndex((item: any) => {
      if (typeof item === "object") {
        return item.id === value;
      }
      return item === value;
    });
    if (index !== -1) {
      return list[index];
    }
    return {
      id: null,
      name: "",
    };
  };
  return (
    <Controller
      name={inputName}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, ref, value } }) => (
        <StyledSelect
          sx={{ width: width }}
          onChange={(e, data: any) => onChange(data.id)}
          value={getSelectValue(value)}
          isOptionEqualToValue={(option: any, value: any) => option.name === value.name}
          getOptionLabel={(option: any) => option.name || ""}
          renderOption={(props: any, option: any) => (
            <OptionsContainer key={Math.random()}>
              <Option key={option.id} {...props}>
                {option.name}
              </Option>
              {!option.isLast && <Divider />}
            </OptionsContainer>
          )}
          disablePortal
          options={list}
          size="small"
          renderInput={(params) => <TextField placeholder={placeholder} inputRef={ref} {...params} />}
        />
      )}
    />
  );
};
export default Select;
