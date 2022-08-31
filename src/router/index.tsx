import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/layout";
import { RouteInterface } from "../ts/interfaces";
import homeRoutes from "./modules/home";
import orderRoutes from "./modules/orders";

const routes: RouteInterface[] = [...homeRoutes, ...orderRoutes];
const BaseRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={<Layout route={route}>{<route.element />}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
