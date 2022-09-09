import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../../assets/styles/components/orders/FormContainer";
import { updateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
import Dropdown from "../base/Dropdown";
import Header from "./Header";
const SelectService: React.FC = () => {
  const masters = useSelector((state: RootState) => state.masters.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // const mastersName = masters.map((master) => {
  //   return master.name;
  // });

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    dispatch(updateOrder({ name: name }));
  };

  return (
    <>
      <Header />
      <FormContainer>
        <form>
          <Dropdown />
        </form>
        {/* <div>Masters: </div>
        <select name="masters" onChange={handleChange}>
          {masters.map((master: MastersInterface) => {
            return (
              <option key={master.id} value={master.name}>
                {master.name}
              </option>
            );
          })}
        </select>
        <button onClick={handleClick}>Add Master</button>

        <div>Master you chossed: {name}</div> */}
      </FormContainer>
    </>
  );
};
export default SelectService;
