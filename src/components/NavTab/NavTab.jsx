import { NavLink } from 'react-router-dom';

function NavTab() {
    const baseLinkClass = 'nav-tab__link';
    const activeLinkClass = 'nav-tab__link_active';
    const hoverLinkClass = 'linkHover';
  
    const createNavLink = (to, text) => (
      <NavLink
        className={isActive => `${baseLinkClass} ${isActive ? activeLinkClass : ''} ${hoverLinkClass}`}
        to={to}
      >
        {text}
      </NavLink>
    );
  
    return (
      <nav className='nav-tab'>
        {createNavLink('/', 'Главная')}
        {createNavLink('/movies', 'Фильмы')}
        {createNavLink('/saved-movies', 'Сохранённые фильмы')}
      </nav>
    );
  }

export default NavTab;