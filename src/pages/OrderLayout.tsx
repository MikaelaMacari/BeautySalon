import { Outlet } from "react-router-dom";
const OrderLayout: React.FC = () => {
  return (
    <>
      <h2>Step nr:</h2>
      <Outlet />
    </>
  );
};
export default OrderLayout;
