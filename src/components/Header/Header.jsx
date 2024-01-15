import HeaderLogo from '../HeaderLogo/HeaderLogo';
import './Header.css';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import NavTab from '../NavTab/NavTab';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ isLoggedIn }) {

  const isMobileScreen = window.innerWidth < 1200;

  const baseLinkClass = 'drawer__link';
  const activeLinkClass = 'drawer__link-active';

  const createNavLink = (to, text) => (
    <NavLink
      className={window.location.pathname === to ? activeLinkClass : baseLinkClass}
      to={to}
    >
      {text}
    </NavLink>
  );

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return isPopupOpened ?
    (<div className='drawer'>
      <div className='drawer-background' />
      <svg onClick={() => setIsPopupOpened(false)} className='drawer-closebutton' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.16113" y="9.28247" width="3" height="22" transform="rotate(-45 7.16113 9.28247)" fill="white" />
        <rect x="22.7168" y="7.16113" width="3" height="22" transform="rotate(45 22.7168 7.16113)" fill="white" />
      </svg>
      <div className='drawer-box-links' >
        {createNavLink('/', 'Главная')}
        {createNavLink('/movies', 'Фильмы')}
        {createNavLink('/saved-movies', 'Сохранённые фильмы')}
      </div>
      <Link className='hover-btn' to='/profile' onClick={() => setIsPopupOpened(false)} >
        <div className='headerInfo__container'>
          <p className='headerInfo__container-text'>Аккаунт</p>
          <div className='headerInfo__image'></div>
        </div>
      </Link>
    </div>)
    : isLoggedIn ? (
      <div className='header__loggedIn'>
        <div className='header__loggedIn-container'>
          <div className='header__loggedIn-links' >
            {isPopupOpened && window.innerWidth < 804 ? '' : <HeaderLogo />}
            {isMobileScreen ? '' : <NavTab />}
          </div>
          {isMobileScreen ? <img src={require('../../images/burgerButton.svg').default} alt='' onClick={() => setIsPopupOpened(true)} /> : <HeaderInfo />}
        </div>
      </div>
    ) : (
      <header className='header'>
        <div className='header__container'>
          <HeaderLogo />
          <div className='header__container_authBlock'>
            <Link to='/signup' className='header__container-link'>
              <p className='header__container_singUpText'>Регистрация</p>
            </Link>
            <Link to='/signin' className='header__container-link' >
              <div className='header__container_signInButton'>
                <p className='header__container_singInText'>Войти</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
}

export default Header;