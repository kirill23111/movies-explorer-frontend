import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' >
            <p className='footer-text' >Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__divider-dark' />
            <div className='footer__container'>
                <p className='footer__container-text'>© 2024</p>
                <div className='footer__container-links'>
                    <p className='footer__container-text'>Яндекс.Практикум</p>
                    <Link className='about-me__link' target='_blank' to='https://github.com/kirill23111'>
                        <p className='footer__container-text'>Github</p>
                    </Link>
                </div>
            </div>
            <div className='footer__container-mobile'>
                <div className='footer__container-links'>
                    <p className='footer__container-text-links-mobile'>Яндекс.Практикум</p>
                    <Link className='about-me__link' target='_blank' to='https://github.com/kirill23111'>
                        <p className='footer__container-text-links-mobile'>Github</p>
                    </Link>
                </div>
                <p className='footer__container-text-mobile'>© 2024</p>
            </div>
        </div>
    )
}

export default Footer;