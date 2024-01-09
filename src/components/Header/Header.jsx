import HeaderLogo from '../HeaderLogo/HeaderLogo';
import './Header.css';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import NavTab from '../NavTab/NavTab';

function Header({ isLoggedIn, isPopupOpened }) {
  const isMobileScreen = window.innerWidth < 1200;

  return isLoggedIn ? (
    <header className='header'>
      <div className='header__container'>
        {isPopupOpened && window.innerWidth < 804 ? '' : <HeaderLogo />}
        {isMobileScreen ? '' : <NavTab />}
      </div>
      <div className='header__container'>
        {isMobileScreen ? '' : <HeaderInfo />}
      </div>
    </header>
  ) : (
    <header className='header'>
      <div className='header__container'>
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;