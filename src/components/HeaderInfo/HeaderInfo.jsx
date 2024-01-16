import React from 'react';
import './HeaderInfo.css';
import { Link } from 'react-router-dom';

function HeaderInfo() {
  return <Link className='hover-btn' to='/profile'>
    <div className='header-info__container'>
      <p className='header-info__container-text'>Аккаунт</p>      
      <div className='header-info__image'></div>
    </div>
  </Link>
}

export default HeaderInfo;