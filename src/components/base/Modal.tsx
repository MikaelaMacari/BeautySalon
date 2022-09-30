import React, { useRef } from "react";
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
  serviceCategoryId: any;
  serviceId: any;
  masterId: any;
  date: string;
  startTime: string;
  endTime: string;
  price: string;
  currencieId: any;
  name: string;
  phone: string;
  email: string;
  comment: string;
}
const resetedOrder: resetedOrderInterface = {
  serviceCategoryId: null,
  serviceId: null,
  masterId: null,
  date: "",
  startTime: "",
  endTime: "",
  price: "",
  currencieId: null,
  name: "",
  phone: "",
  email: "",
  comment: "",
};
const Modal = ({ openModal, setOpenModal }: ModalInterface) => {
  const modalRef = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (e: any) => {
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
