import React from "react";
import { createStoreHook, Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import BaseRouter from "./router";
const App: React.FC = () => {
  return (
    <>
      <BaseRouter />
      <Outlet />
    </>
  );
};
export default App;
