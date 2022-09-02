import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateOrder } from "../../store/orders";
import { RootState } from "../../store/types";
const SelectService: React.FC = () => {
  const masters = useSelector((state: RootState) => state.masters.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // const mastersName = masters.map((master) => {
  //   return master.name;
  // });

  // console.log(newOrder);
  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    dispatch(UpdateOrder({ master: name }));
  };
  return (
    <>
      <div>Masters: </div>
      <select name="masters" onChange={handleChange}>
        {masters.map((master, index) => {
          return (
            <option key={master.id} value={master.name}>
              {master.name}
            </option>
          );
        })}
      </select>
      <button onClick={handleClick}>Add Master</button>

      <div>Master you chossed: {name}</div>
    </>
  );
};
export default SelectService;
