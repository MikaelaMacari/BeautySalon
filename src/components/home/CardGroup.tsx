import React, { useState, startTransition } from "react";

import { Container, Grid } from "@mui/material";
import Slide from "@mui/material/Slide";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { Header, Title } from "../../assets/styles/components/home/CardGroup.style";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

interface CardGroupInterface {
  data: { name: string; img: string; id: number }[];
  title: string;
}

const CardGroup = ({ data, title }: CardGroupInterface) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const containerRef = React.useRef(null);

  const minimizeContainer = () => {
    setIsExpanded((currentState) => !currentState);
  };
  const showArrowIcon = () => {
    if (isExpanded) {
      return <ExpandLessSharpIcon fontSize="large" onClick={minimizeContainer} />;
    } else {
      return <ExpandMoreRoundedIcon fontSize="large" onClick={minimizeContainer} />;
    }
  };
  const handleClick = () => {
    console.log("Clicked");
    startTransition(() => {
      navigate(`/orders/step/1`);
    });
  };
  return (
    <Container ref={containerRef}>
      <Header>
        <Title>{title}</Title>
        {showArrowIcon()}
      </Header>

      {isExpanded && (
        <Slide direction="up" in={isExpanded} container={containerRef.current} timeout={500}>
          <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}>
            {data.map((item) => {
              return (
                <Grid key={item.id} item xs={2} sm={2} md={2} lg={2}>
                  <Card title={item.name} img={item.img} handleClick={handleClick} />
                </Grid>
              );
            })}
          </Grid>
        </Slide>
      )}
    </Container>
  );
};

export default CardGroup;
