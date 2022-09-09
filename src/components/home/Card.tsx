import React from "react";
import { CardBody, CardImg, CardTitle, StyledCard } from "../../assets/styles/components/home/Card.style";
interface CardInterface {
  img: string;
  title: string;
}
const Card = ({ img, title }: CardInterface) => {
  return (
    <StyledCard>
      <CardBody>
        <CardImg src={img}></CardImg>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </StyledCard>
  );
};

export default Card;
