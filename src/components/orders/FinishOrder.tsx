import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import Header from "./Header";
import Container from "@mui/material/Container";
import Row from "../base/Row";
import { Button } from "../base";
import { StyledLink } from "../../assets/styles/app.style";
import ButtonsContainer from "./ButtonsContainer";
import { useNavigate } from "react-router-dom";
import Popup from "../base/Modal";
import Modal from "../base/Modal";

const FinishOrder: React.FC = () => {
  const services = useSelector((state: RootState) => state.services.value);
  const masters = useSelector((state: RootState) => state.masters.value);
  const currencies = useSelector((state: RootState) => state.currencies.value);
  const newOrder = useSelector((state: RootState) => state.orders.value);

  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal((prevState) => !prevState);
  // const handleClose = () => setOpen(false);
  // const getName = (array: any, id: any) => {
  //   const item = array.find((item: any) => item.id === Number(id));
  //   return item?.name;
  // };
  const getValueById = (array: any, id: any) => {
    return array.find((item: any) => item.id === Number(id));
  };
  const getName = (array: any, id: any) => {
    return getValueById(array, id).name;
  };
  const serviceName = getName(services, newOrder.serviceId);
  const masterName = getName(masters, newOrder.masterId);
  const currencieName = getName(currencies, newOrder.currencieId);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Row title="Service" description={`${serviceName}`} />
        <Row title="Master" description={`${masterName}`} />
        <Row title="date/time" description={`${newOrder.date} ${newOrder.startTime}-${newOrder.endTime}`} />
        <Row title="price" description={`${newOrder.price} ${currencieName}`} />
        <Row title="client name" description={`${newOrder.name}`} />
        <Row title="client phone" description={`${newOrder.phone}`} />
        <Row title="client email" description={`${newOrder.email}`} />
        <Row title="comments" description={`${newOrder.comment}`} />
        <ButtonsContainer>
          <Button title={"Back"} isBack={true} handleClick={() => navigate(-1)} />
          <Button title={"Create Order"} handleClick={handleOpen} />
        </ButtonsContainer>
        {/* {open && <Popup open={open} handleClose={handleClose} />} */}
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      </Container>
    </>
  );
};
export default FinishOrder;
