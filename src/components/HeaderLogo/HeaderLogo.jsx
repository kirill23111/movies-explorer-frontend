import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';

function HeaderLogo() {
  return (
    <Link to='/'>
      <img src={headerLogo} alt='Логотип' />
    </Link>
  );
}

export default HeaderLogo;
