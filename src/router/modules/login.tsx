import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const loginRoutes: RouteInterface[] = [
  {
    path: "/login",
    element: lazy(() => import("../../pages/login")),
  },
];
export default loginRoutes;
