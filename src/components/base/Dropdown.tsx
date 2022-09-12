import React from "react";

import Divider from "@mui/material/Divider";

import {
  Option,
  Select,
} from "../../assets/styles/components/base/Dropdown.style";

interface DropdownInterface {
  list: { name: string; img: string; id: number }[];
  handleClick: (value: any) => void;
}

const Dropdown = ({ list, handleClick }: DropdownInterface) => {
  return (
    <Select>
      {list.map((item, index) => {
        const isLast: boolean = index === list.length - 1;
        return (
          <>
            <Option key={index} onClick={() => handleClick(item)}>
              {item.name} {item.id}
            </Option>
            {!isLast && <Divider key={`divider-${index}`} />}
          </>
        );
      })}
    </Select>
  );
};

export default Dropdown;
