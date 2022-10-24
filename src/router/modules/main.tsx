import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const mainRoutes: RouteInterface[] = [
  {
    public: true,
    path: "/main",
    element: lazy(() => import("../../pages/main")),
  },
];
export default mainRoutes;
