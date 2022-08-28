import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SharedLayout from "../pages/SharedLayout";

import OrderWrapper from "../pages/OrderWrapper";
import OrderLayout from "../pages/OrderLayout";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="order/step" element={<OrderLayout />}>
          <Route index element={<Main />} />
          <Route path=":stepId" element={<OrderWrapper />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
