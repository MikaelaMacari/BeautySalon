import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import FormSelect from "./FormSelect";

interface SelectRowInterface {
  serviceCategoryError: boolean;
  serviceError: boolean;
  masterError: boolean;
  setInputValue: any;
}
const SelectRow = ({ serviceCategoryError, serviceError, masterError, setInputValue }: SelectRowInterface) => {
  const products = useSelector((state: RootState) => state.products.value);
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);

  const dispatch = useDispatch();
  const setCategory = (serviceCategoryId: number) => {
    dispatch(updateOrder({ serviceCategoryId }));
  };

  const setService = (serviceId: number) => {
    dispatch(updateOrder({ serviceId }));
  };
  const setMaster = (masterId: number) => {
    dispatch(updateOrder({ masterId }));
  };
  const setPrice = (price: number) => {
    dispatch(updateOrder({ price }));
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
      action: setCategory,
      errorMessage: "Please select a service category",
      error: serviceCategoryError,
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
      action: setService,
      errorMessage: "Please select a service",
      error: serviceError,
    },
    {
      id: 3,
      inputName: "master",
      type: "text",
      placeholder: "Select from list",
      title: "Master",
      description: "Select a master",
      list: masters,
      readonly: true,
      action: setMaster,
      errorMessage: "Please select a master",
      error: masterError,
    },
  ];

  return (
    <>
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
          errorMessage={row.errorMessage}
          error={row.error}
          setInputValue={setInputValue}
        />
      ))}
    </>
  );
};
export default SelectRow;
