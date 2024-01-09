import React from 'react';
import './BurgerHeaderInfo.css';
import burgerButton from '../../images/burgerButton.svg';
import closeButton from '../../images/closeButton.svg';

function BurgerHeaderInfo({ isPopupOpened, handlePopupOpened }) {
  const buttonClassName = `burger-button ${isPopupOpened ? 'burger-button_active' : ''}`;

  return (
    <img
      className={buttonClassName}
      src={isPopupOpened ? closeButton : burgerButton}
      alt={isPopupOpened ? 'Закрыть' : 'Открыть'}
      onClick={handlePopupOpened}
    />
  );
}

export default BurgerHeaderInfo;