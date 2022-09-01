import React from "react";
import { useParams } from "react-router-dom";
import { ClientInformation, FinishOrder, SelectService } from "../../components/orders/create";

export const Create: React.FC = () => {
  const { stepId } = useParams();
  const steps = [<SelectService />, <ClientInformation />, <FinishOrder />];
  const page = steps.find((step, index) => index + 1 === Number(stepId));

  return <section>{page}</section>;
};
export default Create;
