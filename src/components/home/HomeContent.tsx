import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { DataTypes } from "../../ts/enum";
import CardGroup from "./CardGroup";

const HomeContent = () => {
  const services = useSelector((state: RootState) => state.services.value);
  const products = useSelector((state: RootState) => state.products.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  return (
    <>
      <CardGroup data={services} title="services" dataType={DataTypes.Services} />;
      <CardGroup data={products} title="products" dataType={DataTypes.Products} />;
      <CardGroup data={masters} title="masters" dataType={DataTypes.Masters} />;
    </>
  );
};

export default HomeContent;
