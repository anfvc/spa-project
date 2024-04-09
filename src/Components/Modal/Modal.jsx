/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.css";

function Modal({ message, error }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              X
            </span>
            <p className="p-message">{message}</p>
            <p>{error}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
