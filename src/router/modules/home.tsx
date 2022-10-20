import { lazy } from "react";
import { RouteInterface } from "../../ts/interfaces";

const homeRoutes: RouteInterface[] = [
  {
    public: true,
    path: "/",
    element: lazy(() => import("../../pages/home")),
  },
];
export default homeRoutes;
