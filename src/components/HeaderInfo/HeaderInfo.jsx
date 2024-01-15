import React from 'react';
import './HeaderInfo.css';
import { Link } from 'react-router-dom';

function HeaderInfo() {
  return <Link className='hover-btn' to='/profile'>
    <div className='headerInfo__container'>
      <p className='headerInfo__container-text'>Аккаунт</p>      
      <div className='headerInfo__image'></div>
    </div>
  </Link>
}

export default HeaderInfo;