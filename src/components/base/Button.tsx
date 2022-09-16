import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { StyledButton } from "../../assets/styles/components/base/Button.style";
interface ButtonInterface{
  title: string;
  handleClick: (e:React.FormEvent<EventTarget>) => void;
  isNext: boolean;

}
export const Button = ({title, handleClick, isNext}:ButtonInterface) => {    
      if(isNext) {
        return (
          <StyledButton  onClick={handleClick}>{title} 
            <ChevronRightIcon />
          </StyledButton>
        );       
      }else if(!isNext){
        return(
          <StyledButton  onClick={handleClick}> 
            <ChevronLeftIcon />{title}
          </StyledButton>
        )        
      }
    return(
          <StyledButton  onClick={handleClick} > {title} </StyledButton>
        );  
};
