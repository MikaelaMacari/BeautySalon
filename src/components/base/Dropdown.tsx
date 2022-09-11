import React from "react";

import Divider from "@mui/material/Divider";

import { Option, Select } from "../../assets/styles/components/base/Dropdown.style";

interface DropdownInterface {
  list: { name: string; img: string; id: number }[];
  handleClick: (value: string) => void;
}

const Dropdown = ({ list, handleClick }: DropdownInterface) => {
  return (
    <Select>
      {list.map((item, index) => {
        const isLast: boolean = index === list.length - 1;
        return (
          <>
            <Option key={item.id} onClick={() => handleClick(item.name)}>
              {item.name}
            </Option>
            {!isLast && <Divider />}
          </>
        );
      })}
    </Select>
  );
};

export default Dropdown;
