import React from "react";

import Tooltip from "@mui/material/Tooltip";
import { StyledLabel, Title, TooltipText } from "../../../assets/styles/components/formElements/Label.style";

export interface LabelInterface {
  title?: string;
  description?: string;
}
const Label = ({ title, description }: LabelInterface) => {
  return (
    <StyledLabel>
      <Title>{title}</Title>
      {description && (
        <Tooltip title={description} placement="left" arrow>
          <TooltipText>hint</TooltipText>
        </Tooltip>
      )}
    </StyledLabel>
  );
};

export default Label;
