import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import Header from "./Header";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Modal from "../base/Modal";
import Row from "../formElements/Row";
import ButtonsContainer from "../buttons/ButtonsContainer";
import { Button } from "../buttons/Button";

const FinishOrder: React.FC = () => {
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);

  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => {
    setOpenModal((prevState) => !prevState);
  };

  const getValueById = (array: any, id: any) => {
    return array.find((item: any) => item.id === Number(id));
  };
  const getServiceName = () => {
    return getValueById(services, newOrder.serviceId).name;
  };
  const getMasterName = () => {
    return getValueById(masters, newOrder.masterId).name;
  };
  const getCurrencieName = () => {
    return getValueById(currencies, newOrder.currencieId).name;
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Row title="Service" description={`${getServiceName()}`} />
        <Row title="Master" description={`${getMasterName()}`} />
        <Row title="date/time" description={`${newOrder.date} ${newOrder.startTime}-${newOrder.endTime}`} />
        <Row title="price" description={`${newOrder.price} ${getCurrencieName()}`} />
        <Row title="client name" description={`${newOrder.name}`} />
        <Row title="client phone" description={`${newOrder.phone}`} />
        <Row title="client email" description={`${newOrder.email}`} />
        <Row title="comments" description={`${newOrder.comment}`} />
        <ButtonsContainer gap={false}>
          <Button title={"Back"} isBack={true} handleClick={() => navigate(-1)} />
          <Button
            title={"Create Order"}
            handleClick={() => {
              handleOpen();
            }}
          />
        </ButtonsContainer>
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      </Container>
    </>
  );
};
export default FinishOrder;
