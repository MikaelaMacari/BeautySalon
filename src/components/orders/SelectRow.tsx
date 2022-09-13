import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import FormSelect from "../base/FormSelect";

const SelectRow: React.FC = () => {
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
    {
      id: 3,
      inputName: "master",
      type: "text",
      placeholder: "Select from list",
      title: "Master",
      description: "Select a master",
      list: masters,
      readonly: true,
      action: setMaster
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
            />
          ))}        
    </>
  );
};
export default SelectRow;
