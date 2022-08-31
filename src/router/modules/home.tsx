import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const homeRoutes: RouteInterface[] = [
  {
    path: "/",
    element: lazy(() => import("../../pages/home/Home")),
  },
];
export default homeRoutes;
