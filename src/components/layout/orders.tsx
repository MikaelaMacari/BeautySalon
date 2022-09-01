import Header from "./Header";
import PageContainer from "./PageContainer";

const OrdersLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default OrdersLayout;
