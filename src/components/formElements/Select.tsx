// import React, { useState } from "react";

// import Grid from "@mui/material/Grid";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import Dropdown from "./Dropdown";
// import Input from "./Input";
// import Label from "./Label";
// import Error from "./Error";
// import { CustomSelect, LabelSelect, Option } from "../../assets/styles/components/base/formElements/Select.style.";

// interface FormInterface {
//   inputName?: string;
//   placeholder: string;
//   register: any;
//   validationSchema: any;
//   width?: string;
//   readonly?: boolean;
//   value?: string;
//   title: string;
//   description?: string;
//   openDropdown?: () => void;
//   list: any;
//   errors: any;
// }
// const Select = ({ inputName, register, validationSchema, title, description, list, errors, placeholder }: FormInterface) => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={2} md={1} lg={2}>
//         <Label title={title} description={description} />
//       </Grid>
//       <Grid item xs={10} sm={8} md={10} lg={8}>
//         {/* <select {...register(inputName, validationSchema)}>
//           {list.map((item: any) => {
//             return (
//               <>
//                 <option value="" selected hidden>
//                   Select from list
//                 </option>
//                 <option key={item.id} value={item.id}>
//                   {item.name}
//                 </option>
//               </>
//             );
//           })}
//         </select> */}
//         {/* <CustomSelect {...register(inputName, validationSchema)}>
//           {list.map((item: any) => {
//             return (
//               <Option key={item.id} value={item.id}>
//                 {item.name}
//               </Option>
//             );
//           })}
//         </CustomSelect> */}
//         {/* <CustomSelect
//           id={id}
//           name={inputName}
//           type={type}
//           placeholder={placeholder}
//           width={width}
//           {...register(inputName, validationSchema)}
//           readonly={readonly}
//           onClick={openDropdown}
//         /> */}
//         <Error errorMessage={errors?.inputName?.message} />
//       </Grid>
//       <Grid item xs={2} sm={2} md={1} lg={2}>
//         <ExpandMoreIcon />
//       </Grid>
//     </Grid>
//   );
// };

// export default Select;
import React, { useState } from "react";
import { TextField, Divider } from "@mui/material";
import { Controller } from "react-hook-form";
import { Option, OptionsContainer, StyledSelect } from "../../assets/styles/components/formElements/Select.style.";
interface SelectInterface {
  control: any;
  list: any;
  inputName: any;
  rules: any;
  placeholder: any;
  width?: any;
}

const Select = ({ control, list, inputName, rules, placeholder, width }: SelectInterface) => {
  return (
    <Controller
      name={inputName}
      control={control}
      rules={rules}
      render={({ fieldState: { error }, field: { onChange, ref } }) => (
        <StyledSelect
          sx={{ width: width }}
          onChange={(e, data: any) => onChange(data.id)}
          isOptionEqualToValue={(option: any, value: any) => option.name === value.name}
          getOptionLabel={(option: any) => option.name}
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
