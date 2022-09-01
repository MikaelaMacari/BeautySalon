import { Header } from "./header";
import { PageContainer } from ".";

const OrdersLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default OrdersLayout;
