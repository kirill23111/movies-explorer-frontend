import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='aboutme__title-container'>
        <p className='aboutme__title'>
          Студент
        </p>
        <div className='aboutme__divider' />
      </div>
      <div className='aboutme__container'>
        <div className='aboutme__container-first'>
          <img className='aboutme__image-mobile' src={avatar} alt='Студент' />
          <div className='aboutme__container-info'>
            <div className='aboutme__info'>
              <h2 className='aboutme__info-title'>Виталий</h2>
              <h3 className='aboutme__info-subtitle'>Фронтенд-разработчик, 30 лет</h3>
              <p className='aboutme__info-text'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                После того, как прошёл курс по веб-разработке, начал заниматься
                фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <Link className='aboutme__link' target='_blank' to='https://github.com/kirill23111'>
              Github
            </Link>
          </div>
          <img className='aboutme__image' src={avatar} alt='Студент' />
        </div>
        <div className='aboutme__container-second'>
          <p className='aboutme__container-title'>Портфолио</p>
          <div className='aboutme-portfolio-container' >
            <div className='aboutme__portfolio-box'>
              <div className='aboutme__portfolio-title-link'>
                <p className='aboutme__portfolio-title'>Статичный сайт</p>
                <div className='aboutme__portfolio-link'>
                  <img src={require('../../images/arrowLink.svg').default} alt='' className='aboutme__portfolio-link-img' />
                </div>
              </div>
              <div className='aboutme__divider-dark' />
            </div>
            <div className='aboutme__portfolio-box'>
              <div className='aboutme__portfolio-title-link'>
                <p className='aboutme__portfolio-title'>Адаптивный сайт</p>
                <div className='aboutme__portfolio-link'>
                  <img src={require('../../images/arrowLink.svg').default} alt='' className='aboutme__portfolio-link-img' />
                </div>
              </div>
              <div className='aboutme__divider-dark' />
            </div>
            <div className='aboutme__portfolio-box'>
              <div className='aboutme__portfolio-title-link'>
                <p className='aboutme__portfolio-title'>Одностраничное приложение</p>
                <div className='aboutme__portfolio-link'>
                  <img src={require('../../images/arrowLink.svg').default} alt='' className='aboutme__portfolio-link-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default AboutMe;