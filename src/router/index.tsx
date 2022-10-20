import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import PrivateRoute from "../services/privateRoute";
import { RouteInterface } from "../ts/interfaces";
import homeRoutes from "./modules/home";
import loginRoutes from "./modules/login";
import mainRoutes from "./modules/main";
import orderRoutes from "./modules/orders";

const routes: RouteInterface[] = [...homeRoutes, ...loginRoutes, ...mainRoutes, ...orderRoutes];
const BaseRouter: React.FC = () => {
  const getRoute: any = (route: any, index: number) => {
    if (route.public) {
      <Route key={index} path={route.path} element={<Layout route={route}>{<route.element />}</Layout>} />;
    } else {
      <PrivateRoute>
        <Route key={index} path={route.path} element={<Layout route={route}>{<route.element />}</Layout>} />
      </PrivateRoute>;
    }
  };
  return (
    <BrowserRouter>
      <Routes>{routes.map((route: any, index: number) => getRoute(route))}</Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
