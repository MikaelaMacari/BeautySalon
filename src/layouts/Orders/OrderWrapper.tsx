import React from "react";
import { useParams } from "react-router-dom";
import ClientInformation from "../../pages/orders/ClientInformation";
import FinishOrder from "../../pages/orders/FinishOrder";
import SelectService from "../../pages/orders/SelectService";

const OrderWrapper: React.FC = () => {
  const { stepId } = useParams();
  const steps = [<SelectService />, <ClientInformation />, <FinishOrder />];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return <section>{page}</section>;
};

export default OrderWrapper;
