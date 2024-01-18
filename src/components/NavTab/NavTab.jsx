import { NavLink } from 'react-router-dom';
import './NavTab.css' 

function NavTab() {
  const baseLinkClass = 'nav-tab__link';
  const activeLinkClass = 'nav-tab__link-active';

  const createNavLink = (to, text) => (
    <NavLink
      className={window.location.pathname === to ? activeLinkClass : baseLinkClass}
      to={to}
    >
      {text}
    </NavLink>
  );

  return (
    <nav className='nav-tab'>
      {createNavLink('/movies', 'Фильмы')}
      {createNavLink('/saved-movies', 'Сохранённые фильмы')}
    </nav>
  );
}

export default NavTab;