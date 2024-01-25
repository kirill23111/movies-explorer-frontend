import React from "react";
import PopupWithMessage from "../PopupWithMessage";

function PopupErrorNotFound({ isOpen }) {
  return <PopupWithMessage isOpen={isOpen} message="Ничего не найдено." />;
}

export default PopupErrorNotFound;
