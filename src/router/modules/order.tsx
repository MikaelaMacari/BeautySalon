import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const orderRoutes: RouteInterface[] = [
  // {
  //   path: "/orders/step/",
  //   element: lazy(() => import("../../components/layouts/OrderLayout")),
  // },
  {
    path: "/orders/step/:stepId",
    element: lazy(() => import("../../layouts/Orders/OrderWrapper")),
  },
];
export default orderRoutes;
