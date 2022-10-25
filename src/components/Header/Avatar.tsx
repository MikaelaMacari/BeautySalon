import React from "react";
import { StyledAvatar } from "../../assets/styles/components/Header/Avatar.style";
import { NavbarLink } from "../../assets/styles/components/Header/Header.style";

interface AvatarInterface {
  userName: string | undefined;
}
const Avatar = ({ userName }: AvatarInterface) => {
  return (
    <NavbarLink to="/">
      <StyledAvatar>{userName}</StyledAvatar>
    </NavbarLink>
  );
};
export default Avatar;
