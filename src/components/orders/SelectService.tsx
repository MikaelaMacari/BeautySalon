import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import FormSelect from "../base/FormSelect";
import Header from "./Header";

interface FormInterface {
  serviceCategory: string;
  service: string;
  master: string;
}
interface SelectInterface {
  inputValue: number;
}
const SelectService: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.value);
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const dispatch = useDispatch();

  const setCategory = (serviceCategoryId: number) => {
    dispatch(updateOrder({ serviceCategoryId }));
  };

  const setService = (serviceId: number) => {
    dispatch(updateOrder({ serviceId }));
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  const formSelectRows = [
    {
      id: 1,
      inputName: "serviceCategory",
      type: "text",
      placeholder: "Select from list",
      title: "Service category",
      description: "Select a service category",
      list: products,
      readonly: true,
      action: setCategory
    },
    {
      id: 2,
      inputName: "service",
      type: "text",
      placeholder: "Select from list",
      title: "Service",
      description: "Select a service",
      list: services,
      readonly: true,
      action: setService
    },
    // {
    //   id: 3,
    //   inputName: "master",
    //   type: "text",
    //   placeholder: "Select from list",
    //   title: "Master",
    //   description: "Select a master",
    //   list: masters,
    //   readonly: true,
    // },
  ];

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(newOrder);
    // for (const property in newOrder) {
    //   Object.keys(values).map((item) => {
    //     if (item === property) {
    //       dispatch(updateOrder({ serviceCategoryId }));
    //       // setValues({ ...values, [e.target.name]: value });
    //     }
    //   });
    // }

    // Object.keys(values).map((value) => {
    //   // if (value === e.target.name) {
    //   //   console.log(value);
    //   // }
    //   // dispatch(updateOrder({ name: value }));
    //   // console.log(value === e.target.name);
    //   console.log(value);
    // });
    // setValues({ ...values, [e.target.name]: value });
  };

  return (
    <>
      <Header />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {formSelectRows.map((row) => (
            <FormSelect
              key={row.id}
              inputName={row.inputName}
              type={row.type}
              placeholder={row.placeholder}
              title={row.title}
              description={row.description}
              list={row.list}
              readonly={row.readonly}
              getInputValue={row.action}
            />
          ))}
          <button onClick={handleClick}>Click</button>
        </form>
      </FormContainer>
    </>
  );
};
export default SelectService;
