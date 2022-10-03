import React from "react";
import { CardBody, CardImg, CardTitle, StyledCard } from "../../assets/styles/components/home/Card.style";
interface CardInterface {
  img: string;
  title: string;
  handleClick: () => void;
}
const Card = ({ img, title, handleClick }: CardInterface) => {
  return (
    <StyledCard>
      <CardBody onClick={handleClick}>
        <CardImg src={img}></CardImg>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
