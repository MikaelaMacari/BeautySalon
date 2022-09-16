import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import FormSelect from "../base/FormSelect";

const Price: React.FC = () => {
  const [isCurrencie, setIsCurrencie]= useState<boolean>(true)
    const  currencies = useSelector((state: RootState) => state.currencies.value);
    
   
  const dispatch = useDispatch();

  const setCurrencie = (currencieId: number) => {
    dispatch(updateOrder({ currencieId }));
  };
 

  const formSelectRows = [
    {
      id: 1,
      inputName: "currencie",
      type: "text",
      placeholder: "MDL",
      title: "Price",
      description: "Select currencie",
      list: currencies,
      readonly: true,
      action: setCurrencie
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
              isCurrencie={isCurrencie}
            />
          ))}        
    </>
  );
};
export default Price;
