import React from "react";
import "../assets/style.css"; // Move modal-specific styles here if needed.

function Modal({ show, handleClose, title, children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Description</h2>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
