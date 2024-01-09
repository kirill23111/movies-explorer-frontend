import React from 'react';
import promoImage from '../../images/promoImage.svg';
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <img src={promoImage} alt='Картинка' className='promo__image' />
        </section>
    );
}

export default Promo;