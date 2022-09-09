import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import CardGroup from "./CardGroup";

const HomeContent = () => {
  const services = useSelector((state: RootState) => state.services.value);
  const products = useSelector((state: RootState) => state.products.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  return (
    <>
      <CardGroup data={services} title="services" />;
      <CardGroup data={products} title="products" />;
      <CardGroup data={masters} title="masters" />;
    </>
  );
};

export default HomeContent;
