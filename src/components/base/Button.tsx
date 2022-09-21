import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { StyledButton } from "../../assets/styles/components/base/Button.style";
interface ButtonInterface {
  title: string;
  handleClick?: () => void;
  isNext?: boolean;
  isBack?: boolean;
}
export const Button = ({ title, handleClick, isNext, isBack }: ButtonInterface) => {
  if (isNext) {
    return (
      <StyledButton onClick={handleClick}>
        {title}
        <ChevronRightIcon />
      </StyledButton>
    );
  } else if (!isNext && isBack) {
    return (
      <StyledButton onClick={handleClick} isBack>
        <ChevronLeftIcon />
        {title}
      </StyledButton>
    );
  } else {
    return <StyledButton onClick={handleClick}> {title} </StyledButton>;
  }
};
