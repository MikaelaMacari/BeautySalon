import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteInterface } from "../ts/interfaces";
import homeRoutes from "./modules/home";
import orderRoutes from "./modules/order";

const routes: RouteInterface[] = [...homeRoutes, ...orderRoutes];
const BaseRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/home/Home";
// import SharedLayout../pages/Homeges/SharedLayout";

// import OrderWrapper from "../components/UI/Order/OrderWrapper";
// import OrderLayout from "../pages/OrderLayout";
// const AppRoutes: React.FC = () => {
//   return (
// <Routes>
//   <Route path="/" element={<SharedLayout />}>
//     <Route index element={<Home />} />
//     <Route path="order/step" element={<OrderLayout />}>
//       <Route index element={<Home />} />
//       <Route path=":stepId" element={<OrderWrapper />} />
//     </Route>
//   </Route>
// </Routes>
//   );
// };
// export default AppRoutes;
