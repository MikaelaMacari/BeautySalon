import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import React, { SyntheticEvent, useRef, startTransition } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Background, StyledModal, Description, OutlinedButton, PrimaryButton } from "../../assets/styles/components/formElements/Modal.style";
import { Title } from "../../assets/styles/components/formElements/Row.style";
import { resetOrder } from "../../store/orders";
import ButtonsContainer from "../buttons/ButtonsContainer";
interface ModalInterface {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ openModal, setOpenModal }: ModalInterface) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const navigate = useNavigate();

  const handleClose = (e: SyntheticEvent) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  const goToMainPage = () => {
    startTransition(() => {
      navigate(`/`);
    });
  };
  const handleClick = () => {
    dispatch(resetOrder());
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
              <OutlinedButton onClick={goToMainPage}>Go to main page</OutlinedButton>
              <PrimaryButton onClick={handleClick}>Create new order</PrimaryButton>
            </ButtonsContainer>
          </StyledModal>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
