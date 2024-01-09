import React from 'react';
import { Link } from 'react-router-dom';
import avatar from 'path/to/your/avatar';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <img className='aboutme__image' src={avatar} alt='Студент'/>
      <div className='aboutme__container'>
        <h2 className='aboutme__title'>Виталий</h2>
        <h3 className='aboutme__subtitle'>Фронтенд-разработчик, 30 лет</h3>
        <p className='aboutme__paragraph'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='aboutme__link'
          target='_blank'
          to='https://github.com/kirill23111'
        >
          Github
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;