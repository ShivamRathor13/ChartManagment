// Modal.js
import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return isOpen ? (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={stopPropagation}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
