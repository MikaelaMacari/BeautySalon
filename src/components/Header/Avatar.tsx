import React from "react";
import { StyledAvatar } from "../../assets/styles/components/Header/Avatar.style";
import { NavbarLink } from "../../assets/styles/components/Header/Header.style";

const Avatar: React.FC = () => {
  return (
    <NavbarLink to="/">
      <StyledAvatar>RF</StyledAvatar>
    </NavbarLink>
  );
};
export default Avatar;
