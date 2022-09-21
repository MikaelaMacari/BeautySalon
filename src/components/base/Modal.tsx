import React, { useRef } from "react";
import { StyledLink } from "../../assets/styles/app.style";
import { Background, Description, OutlinedButton, PrimaryButton, StyledModal, Title } from "../../assets/styles/components/base/Modal.style";
import ButtonsContainer from "../orders/ButtonsContainer";
interface ModalInterface {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ openModal, setOpenModal }: ModalInterface) => {
  const modalRef = useRef<any>();
  const handleClose = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
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
              <StyledLink to="/orders/step/1">
                <PrimaryButton>Create new order</PrimaryButton>
              </StyledLink>
            </ButtonsContainer>
          </StyledModal>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
