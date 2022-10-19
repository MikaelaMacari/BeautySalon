import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BaseRouter from "./router";
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <BaseRouter />
      </Suspense>
      <Outlet />
    </>
  );
};
export default App;
