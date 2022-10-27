import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutContainer } from "../components/layout/LayoutContainer";
import PrivateRoute from "../services/privateRoute";
import { RouteInterface } from "../ts/interfaces";
import homeRoutes from "./modules/home";
import loginRoutes from "./modules/login";
import mainRoutes from "./modules/main";
import orderRoutes from "./modules/orders";

const routes: RouteInterface[] = [...homeRoutes, ...loginRoutes, ...mainRoutes, ...orderRoutes];

const BaseRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: any, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              <LayoutContainer route={route}>
                <PrivateRoute isPublic={route.public}>{<route.element />}</PrivateRoute>
              </LayoutContainer>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
