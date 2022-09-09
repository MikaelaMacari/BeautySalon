import React from "react";

import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DropdownTitle, Input, Placeholder, StyledDropdown, Title, TooltipText } from "../../assets/styles/components/base/Dropdown.style";

const Dropdown = () => {
  return (
    <StyledDropdown>
      <DropdownTitle>
        <Title>Service category</Title>
        {/* <Tooltip>hint</Tooltip> */}
        <Tooltip title="Select Service Category" placement="left" arrow>
          <TooltipText>hint</TooltipText>
        </Tooltip>
      </DropdownTitle>
      <Input name="services">
        <Placeholder selected hidden>
          Select from list
        </Placeholder>
      </Input>
      <ExpandMoreIcon />
      {/* <Option>kjhngb</Option>
      <Option>kjhngb</Option>
      <Option>kjhngb</Option>
      <Option>kjhngb</Option> */}
    </StyledDropdown>
  );
};

export default Dropdown;
