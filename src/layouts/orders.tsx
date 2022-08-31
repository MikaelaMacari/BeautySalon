import { Header } from "../components/header";
import { PageContainer } from "../components/layout";

const OrdersLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer />
      <h2>Step nr:</h2>
      {children}
    </>
  );
};
export default OrdersLayout;
