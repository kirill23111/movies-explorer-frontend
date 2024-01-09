import React from 'react';
import './HeaderInfo.css';
import { Link } from 'react-router-dom';

function HeaderInfo() {
  return (
    <Link className='hover-btn' to='/profile'>
      <div className='headerInfo__container hover-btn'>
        Аккаунт 
      <div className='headerInfo__image'></div>
      </div>
    </Link>
  );
}

export default HeaderInfo;