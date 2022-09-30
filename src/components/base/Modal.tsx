import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import React, { SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../assets/styles/app.style";
import { Background, StyledModal, Description, OutlinedButton, PrimaryButton } from "../../assets/styles/components/formElements/Modal.style";
import { Title } from "../../assets/styles/components/formElements/Row.style";
import { updateOrder } from "../../store/orders";
import ButtonsContainer from "../buttons/ButtonsContainer";
interface ModalInterface {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface resetedOrderInterface {
  serviceCategoryId: number | undefined;
  serviceId: number | undefined;
  masterId: number | undefined;
  date: string;
  startTime: string;
  endTime: string;
  price: string;
  currencieId: number | undefined;
  name: string;
  phone: string;
  email: string;
  comment: string;
}
const resetedOrder: resetedOrderInterface = {
  serviceCategoryId: undefined,
  serviceId: undefined,
  masterId: undefined,
  date: "",
  startTime: "",
  endTime: "",
  price: "",
  currencieId: undefined,
  name: "",
  phone: "",
  email: "",
  comment: "",
};
const Modal = ({ openModal, setOpenModal }: ModalInterface) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const navigate = useNavigate();

  const handleClose = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  const handleClick = () => {
    dispatch(updateOrder({ ...resetedOrder }));
    navigate(`/orders/step/1`);
  };
  return (
    <>
      {openModal ? (
        <Background ref={modalRef} onClick={handleClose}>
          <StyledModal>
            <Title>Order #1234 succesfully created</Title>
            <Description>What do you like to do next?</Description>
            <ButtonsContainer gap={false}>
              <StyledLink to="/">
                <OutlinedButton>Go to main page</OutlinedButton>
              </StyledLink>
              <PrimaryButton onClick={handleClick}>Create new order</PrimaryButton>
            </ButtonsContainer>
          </StyledModal>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
