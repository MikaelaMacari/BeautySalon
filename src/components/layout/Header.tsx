import React, { useState } from "react";
import { Navbar } from "../../assets/styles/components/Header/Header.style";

import NavbarCollapse from "../Header/NavbarCollapse";
import NavbarExpand from "../Header/NavbarExpand";

const Header: React.FC = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const changeState = () => {
    setExtendNavbar((currentState) => !currentState);
  };
  return (
    <>
      <Navbar extendNavbar={extendNavbar}>
        <NavbarCollapse extendNavbar={extendNavbar} changeState={changeState} />
        {extendNavbar && <NavbarExpand />}
      </Navbar>
    </>
  );
};

export default Header;
