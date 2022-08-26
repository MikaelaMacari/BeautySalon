import { Link, Outlet } from "react-router-dom";
import ClientInformation from "../pages/ClientInformation";
import FinishOrder from "../pages/FinishOrder";
import SelectService from "../pages/SelectService";
const OrderLayout: React.FC = () => {
  return (
    <>
      <Link to="/order/step/1">
        <SelectService />
      </Link>
      <Link to="/order/step/2">
        <ClientInformation />
      </Link>
      <Link to="/order/step/3">
        <FinishOrder />
      </Link>
      <Outlet />
    </>
  );
};
export default OrderLayout;
