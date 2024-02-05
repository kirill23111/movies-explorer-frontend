import React from "react";
import "./PopupWithMessage.css";

function PopupWithMessage({ isOpen, message }) {
  const popupClassName = `popupWithMessage ${
    isOpen ? "popupWithMessage_opened" : ""
  }`;

  return (
    <div className={popupClassName}>
      <div className="popupWithMessage__container">
        <span className="popupWithMessage__text">{message}</span>
      </div>
    </div>
  );
}

export default PopupWithMessage;
