import React from "react";
import Modal from "@mui/material/Modal";
interface ModalInterface {
  open: boolean;
  handleClose(): void;
}
const Popup = ({ open, handleClose }: ModalInterface) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <div>Text in a modal</div>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </div>
    </Modal>
  );
};

export default Popup;
