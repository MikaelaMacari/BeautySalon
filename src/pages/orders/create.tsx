import React from "react";
import { useParams } from "react-router-dom";
import ClientInformation from "../../components/orders/ClientInformation";
import FinishOrder from "../../components/orders/FinishOrder";
import SelectService from "../../components/orders/SelectService";

export const Create: React.FC = () => {
  const { stepId } = useParams();
  const steps = [<SelectService />, <ClientInformation />, <FinishOrder />];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return <section>{page}</section>;
};
export default Create;
