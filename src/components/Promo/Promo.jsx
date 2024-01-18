import React from 'react';
import promoImage from '../../images/promoImage.svg';
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <p className='promo__title'>
                Учебный проект студента факультета Веб-разработки.
            </p>
            <img src={promoImage} alt='Картинка' className='promo__image' />
        </section>
    );
}

export default Promo;