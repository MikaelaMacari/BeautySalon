import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const orderRoutes: RouteInterface[] = [
  {
    public: false,
    path: "/orders/step/:stepId",
    element: lazy(() => import("../../pages/orders/create")),
  },
];
export default orderRoutes;
