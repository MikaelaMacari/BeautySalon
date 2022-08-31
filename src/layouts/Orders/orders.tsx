const OrderLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <h2>Step nr:</h2>
      {children}
    </>
  );
};
export default OrderLayout;
