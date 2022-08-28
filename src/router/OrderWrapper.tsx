import React from "react";
import { useParams } from "react-router-dom";
import ClientInformation from "../pages/ClientInformation";
import FinishOrder from "../pages/FinishOrder";
import SelectService from "../pages/SelectService";

const OrderWrapper: React.FC = () => {
  const { stepId } = useParams();
  const steps = [<SelectService />, <ClientInformation />, <FinishOrder />];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return <section>{page}</section>;
};

export default OrderWrapper;
