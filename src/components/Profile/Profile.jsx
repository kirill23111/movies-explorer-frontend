import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export function Profile() {
    return <div className="profile">
        <Header isLoggedIn />
        <div className="profile__container" >
            <p className='profile__container-header' >Привет, Виталий!</p>
            <div className='profile__container-info' >
                <div className='profile__container-box' >
                    <p className='profile__container-box-text'>Имя</p>
                    <p className='profile__container-box-text'>Виталий</p>
                </div>
                <div className='profile__container-divider' />
                <div className='profile__container-box' >
                    <p className='profile__container-box-text'>E-mail</p>
                    <p className='profile__container-box-text'>pochta@yandex.ru</p>
                </div>
            </div>
            <div className='profile__container-button-block' >
                <p className='profile__container-button-change'>Редактировать</p>
                <Link to='/' style={{ textDecoration: 'none' }} >
                    <p className='profile__container-button-logout'>Выйти из аккаунта</p>
                </Link>
            </div>
        </div>
    </div >
}