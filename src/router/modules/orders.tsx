import { lazy } from "react";
import { PageLayout } from "../../ts/enum";
import { RouteInterface } from "../../ts/interfaces";

const orderRoutes: RouteInterface[] = [
  {
    path: "/orders/step/:stepId",
    element: lazy(() => import("../../components/layout/OrderWrapper")),
    layout: PageLayout.Order,
  },
];
export default orderRoutes;
