import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SelectService from "../pages/SelectService";
import OrderLayout from "./OrderLayout";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/order/step">
        <Route index element={<OrderLayout />} />
        <Route path=":id" element={<SelectService />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
